using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SolarSystem : MonoBehaviour
{
    private readonly float G = 100f;
    GameObject[] celelstials;
    private int maxAsteroid;
    private bool generated = false;

    // Start is called before the first frame update
    void Start()
    {
        maxAsteroid = 10000;
        Generate();
        celelstials = GameObject.FindGameObjectsWithTag("Celestial");
        foreach (GameObject a in celelstials)
        {
            foreach (GameObject b in celelstials)
            {
                if (!a.Equals(b))
                {
                    float m2 = b.GetComponent<Rigidbody>().mass;
                    float r = Vector3.Distance(a.transform.position, b.transform.position);
                    a.transform.LookAt(b.transform);
                    a.GetComponent<Rigidbody>().velocity += a.transform.right * Mathf.Sqrt((G * m2) / r);
                }
            }
        }
    }

    // Update is called once per frame
    void Update()
    {

    }

    void FixedUpdate()
    {
        foreach (GameObject a in celelstials)
        {
            foreach (GameObject b in celelstials)
            {
                if (!a.Equals(b))
                {
                    float m1 = a.GetComponent<Rigidbody>().mass;
                    float m2 = b.GetComponent<Rigidbody>().mass;
                    float r = Vector3.Distance(a.transform.position, b.transform.position);
                    a.GetComponent<Rigidbody>().AddForce((b.transform.position - a.transform.position).normalized * (G * (m1 * m2) / Mathf.Pow(r, 2)));
                }
            }
        }
        // Slow simulation down
        Time.timeScale = 0.1f;
    }

    void Generate()
    {
        if (!generated)
            for (int i = 0; i < maxAsteroid; i++)
            {
                // Create a new asteroid object
                // Load the asteroid prefab
                int random = Random.Range(1, 4);
                GameObject asteroid = Instantiate(Resources.Load<GameObject>("Prefabs/Asteroid " + random));
                int minRadius = 3141;
                int maxRadius = 5086;
                int randomRadius = Random.Range(minRadius, maxRadius);
                float randomAngle = Random.Range(0, 2 * Mathf.PI);
                float x = randomRadius * Mathf.Cos(randomAngle);
                float z = randomRadius * Mathf.Sin(randomAngle);
                asteroid.transform.localScale = new Vector3(1, 1, 1);
                asteroid.transform.position = new Vector3(x, 0, z);
                asteroid.tag = "Asteroid";

                // Add collider to the asteroid
                asteroid.AddComponent<SphereCollider>();

            }
        generated = true;
    }

    int RandomCooedinate()
    {
        int x = Random.Range(3141, 5086);
        // Random negative or positive
        if (Random.Range(0, 2) == 0)
            x *= -1;
        Debug.Log(x);
        return x;
    }
}

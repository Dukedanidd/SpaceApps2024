using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SolarSystem : MonoBehaviour
{
    private readonly float G = 100f;
    GameObject[] celelstials;

    // Start is called before the first frame update
    void Start()
    {
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
}

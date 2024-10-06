using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Earth : MonoBehaviour
{
    private GameObject exitCollider;
    private GameObject player;
    private int maxAsteroid;
    private bool generated = false;

    void Start()
    {
        exitCollider = GameObject.Find("ExitCollider");
        player = GameObject.Find("Player");
        maxAsteroid = 15;

    }

    void Update()
    {
        // Rotate the planet
        transform.Rotate(Vector3.up * 10 * Time.deltaTime);

        // Detect if the camera is outside the exit collider
        if (!exitCollider.GetComponent<Collider>().bounds.Contains(player.transform.position))
        {
            // Load the Solar System scene and set the camera position
            UnityEngine.SceneManagement.SceneManager.LoadScene("Solar System");
        }

        // Generate asteroids
        Generate();
    }

    void Generate()
    {
        if (!generated)
            for (int i = 0; i < maxAsteroid; i++)
            {
                // Create a new asteroid object
                GameObject asteroid = GameObject.CreatePrimitive(PrimitiveType.Sphere);
                asteroid.transform.position = new Vector3(RandomCooedinate(), RandomCooedinate(), RandomCooedinate());
                asteroid.transform.localScale = new Vector3(50, 50, 50);
                asteroid.tag = "Asteroid";
            }
        generated = true;
    }


    int RandomCooedinate()
    {
        // Randomize the position of the asteroid and evite the spawn inside the planet
        float x = Random.Range(-800, 800);
        if (x < 600 && x > -600)
            x = Random.Range(-800, 800);
        return (int)x;
    }
}

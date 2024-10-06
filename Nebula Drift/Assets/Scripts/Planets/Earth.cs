using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Earth : MonoBehaviour
{
    private GameObject exitCollider;
    private GameObject player;
    void Start()
    {
        exitCollider = GameObject.Find("ExitCollider");
        player = GameObject.Find("Player");

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
    }
}

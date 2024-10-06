using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EarthSpace : MonoBehaviour
{

    private GameObject infoCollider;
    private GameObject teletransporterCollider;

    void Start()
    {
        infoCollider = GameObject.Find("EarthInfoCollider");
        teletransporterCollider = GameObject.Find("EarthTeletransporterCollider");
    }

    // Update is called once per frame
    void Update()
    {
        // Detect if the camera is inside the info collider
        if (infoCollider.GetComponent<Collider>().bounds.Contains(Camera.main.transform.position))
        {
            // Show the info panel
            //GameObject.Find("EarthInfoPanel").SetActive(true);
            Debug.Log("Camera is inside the info collider");
        }
        else
        {
            // Hide the info panel
            //GameObject.Find("EarthInfoPanel").SetActive(false);
            Debug.Log("Camera is outside the info collider");
        }

        // Detect if the camera is inside the teletransporter collider
        if (teletransporterCollider.GetComponent<Collider>().bounds.Contains(Camera.main.transform.position))
        {
            UnityEngine.SceneManagement.SceneManager.LoadScene("Earth");
        }
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EarthSpace : MonoBehaviour
{

    private GameObject infoCollider;
    private GameObject teletransporterCollider;
    private GameObject player;
    private GameObject infoPanel;

    void Start()
    {
        infoCollider = GameObject.Find("EarthInfoCollider");
        teletransporterCollider = GameObject.Find("EarthTeletransporterCollider");
        player = GameObject.Find("Player");
        infoPanel = player.transform.Find("Canvas").Find("InfoPanel").gameObject;


    }

    // Update is called once per frame
    void Update()
    {
        // Detect if the camera is inside the info collider
        if (infoCollider.GetComponent<Collider>().bounds.Contains(player.transform.position))
        {
            // Add Text to the Info Panel
            Debug.Log("Inside Info Collider");
        }

        // Detect if the camera is inside the teletransporter collider
        if (teletransporterCollider.GetComponent<Collider>().bounds.Contains(player.transform.position))
        {
            UnityEngine.SceneManagement.SceneManager.LoadScene("Earth");
        }
    }
}

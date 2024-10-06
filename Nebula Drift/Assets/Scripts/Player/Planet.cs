using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Planet : MonoBehaviour
{
    public GameObject player;
    public GameObject planet;

    // Start is called before the first frame update
    public void Start()
    {
        // Get the player object
        player = GameObject.Find("Player");
        // Get the planet object
        planet = GameObject.Find("Planet");
    }

    // Update is called once per frame
    void Update()
    {

    }
}

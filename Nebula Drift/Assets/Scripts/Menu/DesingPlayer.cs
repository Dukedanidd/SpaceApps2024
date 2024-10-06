using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DesingPlayer : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        GameObject.Find("ExitButton").GetComponent<UnityEngine.UI.Button>().onClick.AddListener(ExitDesingPlayer);

    }

    // Update is called once per frame
    void ExitDesingPlayer()
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene("Main Menu");
    }
}

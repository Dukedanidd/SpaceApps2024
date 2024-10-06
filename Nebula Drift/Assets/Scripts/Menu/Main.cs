using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Main : MonoBehaviour
{

    void Start()
    {
        GameObject.Find("PlayButton").GetComponent<UnityEngine.UI.Button>().onClick.AddListener(PlayGame);
        GameObject.Find("DesingPlayerButton").GetComponent<UnityEngine.UI.Button>().onClick.AddListener(DesingPlayer);

    }

    void TaskOnClick()
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene("Solar System");
    }

    void PlayGame()
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene("Solar System");
    }

    void DesingPlayer()
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene("Desing Player");
    }
}

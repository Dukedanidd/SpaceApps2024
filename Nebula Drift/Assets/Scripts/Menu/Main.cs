using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;

public class Main : MonoBehaviour
{

    [DllImport("__Internal")]
    private static extern void SetLocalStorage(string key, string value);

    [DllImport("__Internal")]
    private static extern string GetLocalStorage(string key);

    [DllImport("__Internal")]
    private static extern void RemoveLocalStorage(string key);

    [DllImport("__Internal")]
    private static extern void ClearLocalStorage();


    private GameObject accountPanel;




    void Start()
    {
        GameObject.Find("PlayButton").GetComponent<UnityEngine.UI.Button>().onClick.AddListener(PlayGame);
        GameObject.Find("DesingPlayerButton").GetComponent<UnityEngine.UI.Button>().onClick.AddListener(DesingPlayer);
        GameObject.Find("UsernameButton").GetComponent<UnityEngine.UI.Button>().onClick.AddListener(Username);

        if (GetLocalStorage("username") == null)
        {
            SetLocalStorage("username", "guest");
        }

        if (GetLocalStorage("level") == null)
        {
            SetLocalStorage("level", "1");
        }
    }


    void PlayGame()
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene("Solar System");
    }

    void DesingPlayer()
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene("Desing Player");
    }

    public void Username()
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene("Username");
    }

}

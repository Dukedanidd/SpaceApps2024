using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;

public class Login : MonoBehaviour
{

    [DllImport("__Internal")]
    private static extern void SetLocalStorage(string key, string value);

    [DllImport("__Internal")]
    private static extern string GetLocalStorage(string key);

    [DllImport("__Internal")]
    private static extern void RemoveLocalStorage(string key);

    [DllImport("__Internal")]
    private static extern void ClearLocalStorage();

    private GameObject usernameInput;
    // Start is called before the first frame update
    void Start()
    {
        GameObject.Find("ExitButton").GetComponent<UnityEngine.UI.Button>().onClick.AddListener(Exit);
        GameObject.Find("ChangeButton").GetComponent<UnityEngine.UI.Button>().onClick.AddListener(UpdateUsername);
    }

    void UpdateUsername()
    {
        SetLocalStorage("username", "guest");
        Exit();
    }

    void Exit()
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene("Main Menu");
    }
}

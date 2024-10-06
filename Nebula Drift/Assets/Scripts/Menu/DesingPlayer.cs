using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;
using TMPro;

public class DesingPlayer : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void SetLocalStorage(string key, string value);

    [DllImport("__Internal")]
    private static extern string GetLocalStorage(string key);

    [DllImport("__Internal")]
    private static extern void RemoveLocalStorage(string key);

    [DllImport("__Internal")]
    private static extern void ClearLocalStorage();

    private TMP_Text level, username;

    // Start is called before the first frame update
    void Start()
    {
        GameObject.Find("ExitButton").GetComponent<UnityEngine.UI.Button>().onClick.AddListener(ExitDesingPlayer);
        level = GameObject.Find("Level").GetComponent<TMP_Text>();
        username = GameObject.Find("Username").GetComponent<TMP_Text>();

        level.text = "Level: " + GetLocalStorage("level");
        username.text = GetLocalStorage("username");
    }

    // Update is called once per frame
    void ExitDesingPlayer()
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene("Main Menu");
    }
}

using UnityEngine;

public class CameraController : MonoBehaviour
{
    public Vector2 clampInDegrees = new(360, 180);
    public Vector2 sensitivity = new(2, 2);
    public Vector2 smoothing = new(3, 3);
    public Vector2 targetDirection;
    public Vector2 targetCharacterDirection;

    // Assign this if there's a parent object controlling motion, such as a Character Controller.
    // Yaw rotation will affect this object instead of the camera if set.
    public GameObject characterBody;

    // Mouse Look Script
    private Vector2 _mouseAbsolute;
    private Vector2 _smoothMouse;

    private readonly float moveSpeed = 0.5f;

    private bool isPaused = false;
    private GameObject canvas;


    private void Start()
    {
        DesktopSetup();
        canvas = GameObject.Find("Canvas");
        canvas.transform.Find("PausePanel").Find("ResumeButton").GetComponent<UnityEngine.UI.Button>().onClick.AddListener(Resume);
        canvas.transform.Find("PausePanel").Find("ExitButton").GetComponent<UnityEngine.UI.Button>().onClick.AddListener(Exit);
    }

    private void Update()
    {
        // Detect escape key to pause the game
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            if (!isPaused)
            {
                canvas.transform.Find("PausePanel").gameObject.SetActive(true);
                Cursor.visible = true;
                Cursor.lockState = CursorLockMode.None;
                isPaused = true;
            } else
            {
                canvas.transform.Find("PausePanel").gameObject.SetActive(false);
                Cursor.visible = false;
                Cursor.lockState = CursorLockMode.Locked;
                isPaused = false;
            }
        }

        if (!isPaused)
        {
            DesktopInputUpdate();
        }
    }

    void Exit()
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene("Main Menu");
    }

    void Resume()
    {
        Cursor.visible = false;
        Cursor.lockState = CursorLockMode.Locked;
        GameObject.Find("PausePanel").SetActive(false);
        isPaused = false;
    }

    private void DesktopSetup()
    {
        targetDirection = transform.localRotation.eulerAngles;

        Cursor.visible = false;
        Cursor.lockState = CursorLockMode.Locked;

        // Set target direction for the character body to its inital state.
        if (characterBody)
            targetCharacterDirection = characterBody.transform.localRotation.eulerAngles;
    }

    private void DesktopInputUpdate()
    {
        // Allow the script to clamp based on a desired target value.
        var targetOrientation = Quaternion.Euler(targetDirection);
        var targetCharacterOrientation = Quaternion.Euler(targetCharacterDirection);

        // Get raw mouse input for a cleaner reading on more sensitive mice.
        var mouseDelta = new Vector2(Input.GetAxisRaw("Mouse X"), Input.GetAxisRaw("Mouse Y"));

        // Scale input against the sensitivity setting and multiply that against the smoothing value.
        mouseDelta = Vector2.Scale(mouseDelta, new Vector2(sensitivity.x * smoothing.x, sensitivity.y * smoothing.y));

        // Interpolate mouse movement over time to apply smoothing delta.
        _smoothMouse.x = Mathf.Lerp(_smoothMouse.x, mouseDelta.x, 1f / smoothing.x);
        _smoothMouse.y = Mathf.Lerp(_smoothMouse.y, mouseDelta.y, 1f / smoothing.y);

        // Find the absolute mouse movement value from point zero.
        _mouseAbsolute += _smoothMouse;

        // Clamp and apply the local x value first, so as not to be affected by world transforms.
        if (clampInDegrees.x < 360)
            _mouseAbsolute.x = Mathf.Clamp(_mouseAbsolute.x, -clampInDegrees.x * 0.5f, clampInDegrees.x * 0.5f);

        var xRotation = Quaternion.AngleAxis(-_mouseAbsolute.y, targetOrientation * Vector3.right);
        transform.localRotation = xRotation;

        // Then clamp and apply the global y value.
        if (clampInDegrees.y < 360)
            _mouseAbsolute.y = Mathf.Clamp(_mouseAbsolute.y, -clampInDegrees.y * 0.5f, clampInDegrees.y * 0.5f);

        transform.localRotation *= targetOrientation;

        // If there's a character body that acts as a parent to the camera
        if (characterBody)
        {
            var yRotation = Quaternion.AngleAxis(_mouseAbsolute.x, characterBody.transform.up);
            characterBody.transform.localRotation = yRotation;
            characterBody.transform.localRotation *= targetCharacterOrientation;
        }
        else
        {
            var yRotation = Quaternion.AngleAxis(_mouseAbsolute.x, transform.InverseTransformDirection(Vector3.up));
            transform.localRotation *= yRotation;
        }


        // Movimiento de la camara en una velocidad constante

        transform.position += transform.forward * Input.GetAxis("Vertical") * moveSpeed;


        // Temporal
        if (Input.GetKey(KeyCode.W)) transform.position += moveSpeed * transform.forward;

        if (Input.GetKey(KeyCode.S)) transform.position -= moveSpeed * transform.forward;

        if (Input.GetKey(KeyCode.A)) transform.position -= moveSpeed * transform.right;

        if (Input.GetKey(KeyCode.D)) transform.position += moveSpeed * transform.right;

        if (Input.GetKey(KeyCode.Space)) transform.position += moveSpeed * transform.up;

        if (Input.GetKey(KeyCode.LeftShift)) transform.position -= moveSpeed * transform.up;

        if (Input.GetKey(KeyCode.Escape))
        {
            Cursor.visible = true;
            Cursor.lockState = CursorLockMode.None;
        }
    }
}
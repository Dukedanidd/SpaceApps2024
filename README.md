#

Build the game with the following command:

```bash
Unity -quit -batchmode -projectpath game -executeMethod Builder.Build
```

Copy the game build to the website with the following command:

> [!NOTE]  
> Wait for the build to finish before running this command

```bash
ROBOCOPY game\build\Build\ public\game\ /E
```

using UnityEditor;
using System;

class Builder
{
    static void Build ()
    {
    	BuildPlayerOptions buildPlayerOptions = new BuildPlayerOptions();
    	buildPlayerOptions.scenes = new[] { "Assets/FPS/Scenes/IntroMenu.unity", "Assets/FPS/Scenes/WinScene.unity", "Assets/FPS/Scenes/LoseScene.unity", "Assets/FPS/Scenes/MainScene.unity" };
    	buildPlayerOptions.locationPathName = "build";
    	buildPlayerOptions.target = BuildTarget.WebGL;
    	buildPlayerOptions.options = BuildOptions.None; // set whatever you want here
    	BuildPipeline.BuildPlayer(buildPlayerOptions);  // apply the setting changes
    }
}
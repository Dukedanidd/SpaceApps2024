"use client";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "game/build.loader.js",
    dataUrl: "game/build.data",
    frameworkUrl: "game/build.framework.js",
    codeUrl: "game/build.wasm",
  });

  return (
    <Unity
      unityProvider={unityProvider}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

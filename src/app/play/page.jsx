"use client";
import { useSession } from "next-auth/react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();

  // Get static props
  useEffect(() => {
    if (localStorage.getItem("username") == null && session)
      localStorage.setItem("username", session.user.name);
  }, [session]);

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
j
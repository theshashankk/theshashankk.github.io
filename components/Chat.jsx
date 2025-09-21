// components/Chat.jsx
"use client";
import { useEffect } from "react";

const TawkChat = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (document.getElementById("tawk-script")) return;

    const script = document.createElement("script");
    script.id = "tawk-script";
    script.async = true;
    script.src = "https://embed.tawk.to/68cf7d75d3cba51921857592/1j5l845rt";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // optional: expose Tawk API object
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
  }, []);

  return null; // nothing is rendered directly
};

export default TawkChat;

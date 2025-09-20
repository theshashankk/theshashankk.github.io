// components/Chat.jsx
"use client";
import { useEffect } from "react";

const KoFi = () => {
  useEffect(() => {
    // Load Ko-fi widget script
    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;
    script.onload = () => {
      // When script loads, initialize the widget
      if (window.kofiWidgetOverlay) {
        window.kofiWidgetOverlay.draw("shashank76914", {
          type: "floating-chat",
          "floating-chat.donateButton.text": "Buy me a coffee ☕",
          "floating-chat.donateButton.background-color": "#FF813F",
          "floating-chat.donateButton.text-color": "#fff",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return null; // nothing is rendered directly, only the widget script
};

export default KoFi;

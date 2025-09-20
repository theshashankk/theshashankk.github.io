// components/BuyMeACoffee.js
"use client";
import { useEffect } from "react";

const BuyMeACoffee = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("data-name", "BMC-Widget");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.setAttribute("data-id", "Shashanksharma1");
    script.setAttribute("data-description", "Support my work on Buy Me a Coffee!");
    script.setAttribute("data-message", "Hey 👋 Thanks for stopping by! If you enjoy my work, you can support me with a coffee ☕");
    script.setAttribute("data-color", "#FF813F");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // widget handles its own rendering
};

export default BuyMeACoffee;

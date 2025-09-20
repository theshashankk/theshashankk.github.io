// components/BuyMeACoffee.js
"use client";
import Script from "next/script";

const BuyMeACoffee = () => {
  return (
    <>
      <Script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="Shashanksharma1"
        data-description="Support my work on Buy Me a Coffee!"
        data-message="Hey 👋 Thanks for stopping by! If you enjoy my work, you can support me with a coffee ☕"
        data-color="#FF813F"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
        strategy="afterInteractive"
      />
    </>
  );
};

export default BuyMeACoffee;

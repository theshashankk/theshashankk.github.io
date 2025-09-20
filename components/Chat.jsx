// components/BuyMeACoffee.js
"use client";
import Script from "next/script";

const KoFi = () => {
  return (
    <>
      {/* Load Ko-fi widget script */}
      <Script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js" strategy="afterInteractive" />

      {/* Initialize widget after script loads */}
      <Script id="ko-fi-widget" strategy="afterInteractive">
        {`
          kofiWidgetOverlay.draw('shashank76914', {
            type: 'floating-chat',
            'floating-chat.donateButton.text': 'Support Me',
            'floating-chat.donateButton.background-color': '#323842',
            'floating-chat.donateButton.text-color': '#fff'
          });
        `}
      </Script>
    </>
  );
};

export default KoFi;

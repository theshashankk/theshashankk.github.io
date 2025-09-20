// components/BuyMeACoffee.js
"use client";
import Script from "next/script";

const KoFi = () => {
  return (
    <>
      <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
<script>
  kofiWidgetOverlay.draw('shashank76914', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support Me',
    'floating-chat.donateButton.background-color': '#323842',
    'floating-chat.donateButton.text-color': '#fff'
  });
</script>
    </>
  );
};

export default BuyMeACoffee;

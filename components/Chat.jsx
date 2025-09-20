// components/BuyMeACoffee.js
"use client";

const BuyMeACoffee = () => {
  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      <a
        href="https://buymeacoffee.com/shashanksharma1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          style={{ height: "50px", width: "180px" }}
        />
      </a>
    </div>
  );
};

export default BuyMeACoffee;

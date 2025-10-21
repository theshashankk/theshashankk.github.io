const AdsenseScript = () => {
  return (
    <>
      {/*
        AdSense Verification Script
        This script tag must be placed directly in the <head> for site verification.
      */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2975618707623489"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default AdsenseScript;

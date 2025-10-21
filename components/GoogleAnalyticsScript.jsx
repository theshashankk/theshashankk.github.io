import Script from 'next/script'; // Import the Next.js Script component

const GoogleAnalyticsScript = () => {
  return (
    <>
      {/* This is the primary gtag.js script. 
        We use 'beforeInteractive' strategy to load it early in the <head>.
      */}
      <Script
        strategy="beforeInteractive" 
        src="https://www.googletagmanager.com/gtag/js?id=G-FWBXV8T8T1" 
      />
      
      {/* This script initializes gtag and configures your GA ID. */}
      <Script
        id="google-analytics-init" // Unique ID is required when using multiple <Script> tags
        strategy="afterInteractive" // Loads after the page is interactive, which is suitable for the init logic
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FWBXV8T8T1');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalyticsScript;

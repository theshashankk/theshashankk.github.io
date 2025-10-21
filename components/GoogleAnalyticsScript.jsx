const GoogleAnalyticsScript = () => {
  return (
    <>
      {/* Google tag (gtag.js) - Primary Script Load */}
      <script 
        async 
        src="https://www.googletagmanager.com/gtag/js?id=G-FWBXV8T8T1" 
      />
      
      {/* Google Analytics Initialization and Configuration */}
      <script
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

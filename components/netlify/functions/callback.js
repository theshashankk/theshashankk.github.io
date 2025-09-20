const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  const params = event.queryStringParameters;
  const code = params && params.code;

  if (!code) {
    return { 
      statusCode: 400, 
      body: "No code received from Spotify. Make sure you accessed via the login flow." 
    };
  }

  const client_id = "022c39eddbe74d5d9f6fd358cc07c33c";
  const client_secret = "1820183f0bac499f9fa1fc96b7a37db3";
  const redirect_uri = "https://theshashank.qzz.io/.netlify/functions/callback";

  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri
    })
  });

  const tokens = await tokenResponse.json();

  return {
    statusCode: 200,
    body: `✅ Spotify Refresh Token:\n\n${tokens.refresh_token}`
  };
};

const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  const params = new URLSearchParams(event.queryStringParameters);
  const code = params.get("code");

  if (!code) {
    return { statusCode: 400, body: "No code received from Spotify" };
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
    body: `Access Token: ${tokens.access_token}\nRefresh Token: ${tokens.refresh_token}`
  };
};

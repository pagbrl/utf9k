const fetch = require("node-fetch")

const API_ENDPOINT = "https://api.trakt.tv/users/sentry/watching"

exports.handler = async function(event, context) {
  const clientID = process.env.CLIENT_ID

  headers = {
    "Content-Type": "application/json",
    "trakt-api-version": 2,
    "trakt-api-key": clientID
  }

  return fetch(API_ENDPOINT, { headers })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data
    }))
    .catch(error => ({
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message })
    }))
}

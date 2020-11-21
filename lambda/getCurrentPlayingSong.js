const axios = require("axios");

module.exports.handler = async function (event, context) {
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM_NAME}&api_key=${process.env.LASTFM_API_KEY}&format=json`;
  const response = await axios.get(url).then((res) => res);

  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify(response.data.recenttracks.track),
  };
};

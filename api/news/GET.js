module.exports = (request, response) => {
  response.status(200).sendFile('GET.JSON', { root: __dirname });
};
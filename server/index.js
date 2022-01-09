const http = require('http');
const Controller = require('./controller.js');

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {

  // /api/searchResults : GET
  if (req.url === '/api/search' && req.method === 'GET') {
    // get the search results.
    const searchResults = await new Controller().getInfos();
    // set the status code, and content-type
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // send the data
    res.end(JSON.stringify(searchResults));
  }

  // /api/search/:id : GET
  else if (req.url.match(/\/api\/search[?&]q=([^&]+)/) && req.method === 'GET') {
    try {
      // get id from url
      const id = req.url.split('?q=')[1];
      // get search result
      const searchResult = await new Controller().getInfo(id);
      // set the status code and content-type
      res.writeHead(200, { 'Content-Type': 'application/json' });
      // send the data
      res.end(JSON.stringify(searchResult));
    } catch (error) {
      // set the status code and content-type
      res.writeHead(404, { 'Content-Type': 'application/json' });
      // send the error
      res.end(JSON.stringify({ message: error }));
    }
  }

  // No route present
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});

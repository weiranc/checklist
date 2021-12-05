var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10, // Seconds.
};


var storage = [];


var requestHandler = function(request, response) {

  var statusCode;
  var method = request.method;
  var headers = defaultCorsHeaders;

  console.log('Serving request type ' + request.method);
  console.log(request)

  if (method === 'GET') {
    statusCode = 200;
    headers['Content-Type'] = 'application/json'
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify(storage));
  } else
  if (method === 'POST') {
    statusCode = 201;
    request.on('data', function(data) {
      storage.push(data);
    });
    headers['Content-Type'] = 'application/json'
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify(storage));
  } else
  if (method === 'OPTIONS') {
    statusCode = 200;
    response.writeHead(statusCode, headers);
    response.end();
  } else {
    statusCode = 404;
    response.writeHead(statusCode, headers);
    response.end();
  }
};

exports.requestHandler = requestHandler;
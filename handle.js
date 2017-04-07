var querystring = require('querystring');

function handle(request, response){
    response.writeHead(200, {
	'Content-Type': 'text/html'
    });


    var body = '';
    request.on('data', function(data) {
        body += data.toString();
    });

    request.on('end', function() {
        var decode = querystring.parse(body);

        console.log(decode);
    });

    response.write('<!DOCTYPE "html">');
    response.write('<html>');
    response.write('<head>');
    response.write('<title>node js server</title>');
    response.write('</head>');
    response.write('<body>');
    response.write("<h1>Hello from http module</h1>");
    response.write('</body>');
    response.write('</html>');

    var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    console.log(ip);

    response.end();
}

module.exports = handle;

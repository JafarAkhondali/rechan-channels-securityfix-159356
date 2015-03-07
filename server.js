var app = require('http').createServer(handler);
var fs = require('fs');

app.listen(8080);

function handler (req, res) {

    // handle requests for favico.ico
    if (req.url === "/favicon.ico") {
        res.writeHead(200, {'Content-Type': 'image/x-icon'});
        res.end();
        console.log('favicon requested');
        return;
    }

    // handle requests for index.html
    fs.readFile('index.html', function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    });
}

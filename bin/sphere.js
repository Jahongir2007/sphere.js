const http = require("http");
const https = require('https');
const fs = require("fs");

function options(self){
    const serverSettings = function(req, res){
        res.write(self["send"]);
        res.end();
    }

    const server = http.createServer(serverSettings);
    server.listen(self["listen"]);
}

function html(selfHtml){
    const serverHTML = http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': "text/html"})
        var readstream = fs.createReadStream(__dirname + selfHtml["file"], "utf8");
    });

    serverHTML.listen(selfHtml["listen"]);
}

function post(postself){
    const data = JSON.stringify({
        todo: postself["send"]
      })
      
      const options = {
        hostname: postself["host"],
        port: postself["port"],
        path: postself["path"],
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length
        }
      }
      
      const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)
      
        res.on('data', d => {
          process.stdout.write(d)
        })
      })
      
      req.on('error', error => {
        console.error(error)
      })
      
      req.write(data)
      req.end()
}

module.exports = {
    options,
    html,
    post
}

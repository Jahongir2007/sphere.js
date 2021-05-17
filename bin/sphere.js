/*
Author: Jahongir Sobirov
Sphere.js mini web framework
Version: 1.5.1
License: MIT
*/
const http = require("http");
const https = require('https');
const fs = require("fs");
const url = require("url");

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
function queryURL(self){
  http.createServer(function(req, res){
    res.writeHead(self["head"], {"Content-type": "text/html"});
    res.write(req.url);
    res.end();
  }).listen(self["listen"])
}
function splitURL(self){
  http.createServer(function(req, res){
    res.writeHead(self["head"], {"Content-type": "tex/html"});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end();
  }).listen(self["listen"])
}
function URL(self, adr){
  var q = url.parse(adr["link"], true);
  if(self == "host"){
    console.log(q.host);
  }
  else if(self == "pathname"){
    console.log(q.pathname);
  }
  else if(self == "search"){
    console.log(q.search);
  } 
}
function client(link){
  let request = https.get(link, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
    res.resume();
    return;
  }

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('close', () => {
    console.log('Retrieved all data');
    console.log(JSON.parse(data));
  });
});
request.on('error', (err) => {
  console.error(`Encountered an error trying to make a request: ${err.message}`);
});
}
function checkRun(self){
  if(self["host"] == false){
    http.createServer(function(req, res){
      res.writeHead(self["head"]);
      res.write(self["send"]);
      res.end();
    }).listen(self["port"], () => {
      console.log(`Server is running at ${self["port"]}`);
    });
  }else{
    if(self["host"] == false){
      console.log(`Server is running at ${self["port"]}`);
      http.createServer(function(req, res){
        res.writeHead(self["head"]);
        res.write(self["send"]);
        res.end();
      }).listen(self["host"], self["port"], () => {
        console.log(`Server is running at ${self["host"]}:${self["port"]}`);
      });
  }
}
}
module.exports = {
    options,
    html,
    post,
    queryURL,
    splitURL,
    URL,
    client,
    checkRun
}

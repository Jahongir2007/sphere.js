## Documentations
### Getting started
`gh repo clone Jahongir2007/sphere.js` Download the framework using the GitHub CLI. Creating `helloworld.js` program. After downloading the framework, enter these codes:
```js
const sphere = require("./bin/sphere");
const app = sphere;
app.options({
    head: 200,
    send: "Hello, world!",
    listen: 8000
});
```
Now we use it:
```
node heloworld.js
```
### Importing Sphere.js and creating sphere.js application
To import Sphere.js, you will need the `require()` method.
```js
const require = require("./sphere"); // importing Sphere.js
```
We save the Sphere.js methods to the desired variable (and our first program is ready):
```js
const app = sphere;  
```
### `options()` method in Sphere.js
Now let's use the `options()` method:
```js
const sphere = require("./sphere");
const app = sphere;
app.options(); // calling method options()
```
This method for creating http servers. Objects in the `options()` method
```js
const sphere = require("./sphere");
const app = sphere;
app.options({
    head: 200
});
```
The `head:` object is an inbuilt object of the ‘http’ module which sends a response header to the request. The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. Optionally one can give a human-readable statusMessage as the second argument.
`send:` object for getting datas in the http server:
```js
const sphere = require("./sphere");
const app = sphere;
app.options({
        send: "Hello, world!" // getting Hello, world!
});
```
The `listen:` object for indicates on which server the data will be output. This object must be in the all methods:
```js
const sphere = require("./sphere");
const app = sphere;
app.options({
    listen: 8000
});
```
### `html()` method in Sphere.js
The `html()` method uploads HTML files to the http server. Usage:
```js
const sphere = require("./sphere");
const app = sphere;
app.html({
    file: "/test.html",
    listen: 8000
});
```
`file:` object indicates which file to retrieve.
```js
const sphere = require("./sphere");
const app = sphere;
app.html({
    file: "/test.html", // test.html
    listen: 8000
});
```
### `post()` method in Sphere.js
`post()` method creating for [POST](https://en.wikipedia.org/wiki/POST_(HTTP)):
```js
const sphere = require("./sphere");
const app = sphere;
app.post({
    send: "Sphere.js mini web framework", // getting string
    host: "datajs.com", // host server
    port: 443, // port server,
    path: "/todos" // path server
});
```

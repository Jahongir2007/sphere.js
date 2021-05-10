![splogo](https://user-images.githubusercontent.com/69193276/117698786-83ad6600-b1dd-11eb-936d-953cb19aab65.png)
# Sphere.js mini web framework
Sphere.js mini web framework for Node.js.
## Documentations
### Feauters
This framework for creating simple http servers for all. 
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

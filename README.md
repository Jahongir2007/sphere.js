![splogo](https://user-images.githubusercontent.com/69193276/117698786-83ad6600-b1dd-11eb-936d-953cb19aab65.png)
# Sphere.js mini web framework
Sphere.js mini web framework for Node.js.
## Documentations
### Feauters
This framework for creating simple http servers for all. 
### Getting started
Download .zip sphere.js and copy downloaded folder for your application folder, enter this codes:
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
Result
![test](https://user-images.githubusercontent.com/69193276/118434709-f1362680-b6f6-11eb-8ea4-1bde3f6ce35b.png)

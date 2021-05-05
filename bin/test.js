const sphere = require("./sphere");
const app = sphere;
app.options({
  head: 200,
  send: "Hello, world!",
  listen: 8000
});

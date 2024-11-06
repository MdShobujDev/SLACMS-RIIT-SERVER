const app = require("./app");
const config = require("./config/config");

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});

module.exports = app;

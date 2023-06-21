const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Server are Online yet !`);
});
app.get("/check-port", (req, res) => {
  res.json({
    data: `server are listening from port=${port}`,
  });
});

app.listen(port, () => {
  console.log(`Listening on PORT ${port}`);
});

const express = require("express");
const { flattenObject, docs } = require("./util");
const app = express();
const port = process.env.PORT || 1234;

app.use(express.json({}));

app.post("/", (req, res) => {
  res.send(flattenObject(req.body));
});

app.get("/", (_, res) => {
  res.send(docs);
});

app.listen(port, () => {
  console.log(`Server has started running on port ${port} `);
});

const express = require("express");
const { handleHomeRequest } = require("./controllers");

const port = process.env.PORT || 3001;

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", handleHomeRequest);

app.listen(port, () => console.log(`Server running on port ${port}`));

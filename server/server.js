const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
const axios = require("axios");

const PORT = 2888;

const app = express();
app.use(cors());
app.use(bp.json());

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
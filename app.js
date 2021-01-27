const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

// config
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));
dotenv.config();

// routing
const path = "/api/v1";
const routes = require("./routes");
app.use(path, routes);

app.use((req, res, next) => {
  return res.status(404).json({ message: "Route not found" });
});

app.use((error, req, res, next) => {
  console.log(error);
  return res.status(400).json({ message: "Something went wrong" });
});

const db = require("./config/db");
const port = process.env.port || 5000;

(async () => {
  try {
    await db.authenticate();
    require("./config/relations")(db);
    app.listen(port, () => console.log(`Server started in port: ${port}`));
  } catch (err) {
    console.log(err);
    console.log("Server could not start");
  }
})();

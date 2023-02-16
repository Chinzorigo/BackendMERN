const express = require("express");
const dotenv = require("dotenv");
var path = require("path");
var rfs = require("rotating-file-stream");
const connectDB = require("./config/db");

// Аппын тохиргоог process.env рүү ачаалах
dotenv.config({ path: "./config/config.env" });

connectDB();

var morgan = require("morgan");
const logger = require("./middleware/logger");

// Router оруулж ирэх
const usersRoutes = require("./routes/Users");
const inventoryRoutes = require("./routes/Inventory");
const loginRoutes = require("./routes/Login");
const categoryRoutes = require("./routes/Category");

// create a write stream (in append mode)
var accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});

const app = express();

// Body parser
app.use(express.json());  

app.use(logger);
app.use(morgan("combined", { stream: accessLogStream }));
app.use("/api/users", usersRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/category", categoryRoutes);


const server = app.listen(
  process.env.PORT,
  console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `)
);


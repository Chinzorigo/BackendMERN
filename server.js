const express = require("express");
const dotenv = require("dotenv");
var path = require("path");
var rfs = require("rotating-file-stream");
const connectDB = require("./config/db");
const cors = require("cors");

// Аппын тохиргоог process.env рүү ачаалах
dotenv.config({ path: "./config/config.env" });

connectDB();

//domain that can call this api
var whitelist = [ 'https://ecommerce4showcase.onrender.com','https://ecommerce4showcase.vercel.app', 'http://localhost:3000'  ];


var corsOptions = {
  origin: function (origin, callback) {
    if (origin === undefined || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    
    } else {
      callback(new Error("Nice try..."));
    }
  },
  allowedHeaders: "Authorization, Set-Cookie, Content-Type",
  methods: "GET, POST, PUT, DELETE",
  credentials: true
  

}

var morgan = require("morgan");
const logger = require("./middleware/logger");

// Router оруулж ирэх
const usersRoutes = require("./routes/Users");
const productRoutes = require("./routes/Product");
const loginRoutes = require("./routes/Login");
const categoryRoutes = require("./routes/Category");
const promotionRoutes = require("./routes/Promotion");
const productDetailRoutes = require("./routes/ProductDetail");
const orderRoutes = require("./routes/Order");
const paymentRoutes = require("./routes/Payment")
const beginBalanceRoutes = require("./routes/BeginBalance")
const shipmentRoutes = require("./routes/Shipment")

// create a write stream (in append mode)
var accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});

const app = express();

// Body parser
app.use(express.json());  
app.use(cors(corsOptions));
app.use(logger);
app.use(morgan("combined", { stream: accessLogStream }));
app.use("/api/users", usersRoutes);
app.use("/api/product", productRoutes);
app.use("/api/productdetail", productDetailRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/promotion",promotionRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/beginbalance", beginBalanceRoutes);
app.use("/api/shipment", shipmentRoutes);

const server = app.listen(
  process.env.PORT,
  console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `)
);


require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const adminRoutes = require("./routes/adminRoutes");
const managerRoutes = require("./routes/managerRoutes");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/admin", adminRoutes);
app.use("/api/manager", managerRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

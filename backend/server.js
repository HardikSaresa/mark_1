const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 500;
// const chat = require("./data/data");

const connectDB = require("./config/db");

dotenv.config();
connectDB();

app.use(notFound);
app.use(errorHandler);
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`api is running`);
});
app.use("/api/user", userRoutes);
app.listen(port, console.log(`STARTED AT ${port}`));

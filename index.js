require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const authRoutes = require("./routes/auth-routes");
const bookRoutes =require("./routes/book-routes")
const reviewRoutes= require("./routes/review-routes")
connectToDB();

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
// router for auth
app.use("/api/auth", authRoutes);

//route for books
app.use("/api/book", bookRoutes );

//routes for review
app.use("/api/review",reviewRoutes);


app.listen(PORT, () => {
  console.log(`Server is now listeining to PORT ${PORT}`);
});
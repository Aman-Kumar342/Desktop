const express=require("express");
const dotenv=require("dotenv");
const contactRoutes=require("./routes/contactRoutes");
const errorHandler=require("./middleware/errorHandler");

dotenv.config();

const app =express();

const port=process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts",contactRoutes);

// always place the error handler after all routes

app.use(errorHandler);

app.listen(port,()=>{
    console .log(`server running on port ${port}`);
});
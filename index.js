import express from "express"
import mongoose from "mongoose";
import userRole from "./routers/user-role_router"
import userRouter from "./routers/user_router"
import categoryRouter from "./routers/category_router"
import sub_categoryRouter from "./routers/sub-category_router"
import productRouter from "./routers/product_router"
const app = express();
app.use(express.json());

app.get("/test",()=>{
    console.log("test success");
})
app.post("/", (req, res) => {
    res.json("Working ???");
})

app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/sub-category", sub_categoryRouter);
app.use("/products", productRouter);
app.use("/user-role", userRole);
mongoose.connect("mongodb://localhost:27017/Cart")
    .then(() => {
        console.log("mongodb started.");
    }).catch(() => {
        console.log("mongodb connection failed.");
    })

app.listen(9999, () => {
    console.log("Server is Running")
})
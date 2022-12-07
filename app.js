import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import newEventRoute from "./src/routes/newEventRoute.js";
import errorMiddleware from "./src/middlewares/error.js";
import clientReqRoute from "./src/routes/clientRequestRoute.js";
import recReqRoute from "./src/routes/recruitmentReqRoute.js";
import finReqRoute from "./src/routes/finReqRoute.js";
import taskAllocationRoute from "./src/routes/taskAllocationRoute.js";
import userRoute from "./src/routes/userRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Event route
app.use("/api/v1", newEventRoute);
//Client request route
app.use("/api/v1", clientReqRoute);
//Recruitment request route
app.use("/api/v1", recReqRoute);
//Financial request route
app.use("/api/v1", finReqRoute);
//Task allocation route
app.use("/api/v1", taskAllocationRoute);
//User route
app.use("/api/v1", userRoute);

//Middleware for error
app.use(errorMiddleware);
export default app;

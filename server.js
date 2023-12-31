require("./config/dbConfig");
const express = require("express");
const userRouter = require("./routers/userRouter");
const adminRouter = require("./routers/adminRouter");
const flightRouter = require("./routers/flightRouter");
const fileUploader = require('express-fileupload')
const PORT = process.env.PORT || 5050;

const app = express();
app.use(express.json());
app.use(fileUploader({useTempFiles: true}))

app.use("/trippy", userRouter);
app.use("/trippy", adminRouter);
app.use("/trippy", flightRouter);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});

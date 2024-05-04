const express = require("express");
const dbConnect = require("./dbConnect/dnConnection");
const route = require("./Routes/route");
const app = express();

app.use(express.json());
app.use("/", route);
app.get("/", (req, res) => {
   res.send("First page");
});

app.listen(process.env.PORT || 5000, () => {
   console.log("server is running");
   dbConnect();
});

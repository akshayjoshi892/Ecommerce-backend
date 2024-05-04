const userRouter = require("./userRoutes");
const userAuth = require("./authRoute");
const router = require("express").Router();
const productRoute = require("./productRoute");
const base = "/api/v1";

router.use(`${base}/users`, userRouter);
router.use(`${base}/auth`, userAuth);
router.use(`${base}/products`, productRoute);

module.exports = router;

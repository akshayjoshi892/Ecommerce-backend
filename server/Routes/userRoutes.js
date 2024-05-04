const { updateUser, deleteUser } = require("../Controllers/userController");
const verifyAdmin = require("../Middleware/verifyToken");
const verifyToken = require("../Middleware/verifyToken");

const userRouter = require("express").Router();

userRouter.get("/get-users", (req, res) => {
   res.send("Users are below");
});

userRouter.put("/user/update/:id", verifyToken, updateUser);
userRouter.delete("/user/delete/:id", verifyAdmin, deleteUser);

module.exports = userRouter;

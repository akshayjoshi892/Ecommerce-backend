const user = require("../Models/userModel");

const updateUser = async (req, res) => {
   try {
      const updatedUser = await user.findByIdAndUpdate(
         req.params.id,
         {
            $set: req.body,
         },
         {
            new: true,
         }
      );
      if (!updatedUser) {
         return res.status(404).json({
            message: "User not found",
         });
      }
      res.status(200).json({
         message: "User updated successfully...",
         data: updatedUser,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         message: "User update failed",
         error: error,
      });
   }
};

const deleteUser = async (req, res) => {
   try {
      await user.findByIdAndDelete(req.params.id);
      res.status(200).json({
         message: "User has been deleted successfully...",
      });
   } catch (error) {
      res.status(500).json({
         message: "user deletion failed...",
      });
      console.log(error);
   }
};

module.exports = { updateUser, deleteUser };

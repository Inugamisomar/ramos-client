const express = require("express");

const router = express.Router();

const {
  getUsers,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  toggleUserStatus,
} = require(
  "../controllers/userController"
);

// GET USERS
router.get(
  "/",
  getUsers
);

// REGISTER USER
router.post(
  "/register",
  registerUser
);

// LOGIN USER
router.post(
  "/login",
  loginUser
);

// UPDATE USER
router.put(
  "/:id",
  updateUser
);

// TOGGLE STATUS
router.patch(
  "/:id/status",
  toggleUserStatus
);

// DELETE USER
router.delete(
  "/:id",
  deleteUser
);

module.exports = router;
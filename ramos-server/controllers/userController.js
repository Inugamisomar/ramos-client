const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

// REGISTER USER
const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      age,
      gender,
      role,
      contactNumber,
      address,
      isActive,
    } = req.body;

    console.log(req.body);

    const userExists = await User.findOne({
      username,
    });

    if (userExists) {
      return res.status(400).json({
        message: "Username already taken",
      });
    }

    const emailExists = await User.findOne({
      email,
    });

    if (emailExists) {
      return res.status(400).json({
        message: "Email already taken",
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      age,
      gender,
      role,
      contactNumber,
      address,
      isActive,
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// LOGIN USER
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      username,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid username or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid username or password",
      });
    }

   // CHECK IF ACCOUNT IS ACTIVE
if (!user.isActive) {

  return res.status(403).json({
    message:
      "Account is disabled",
  });
}

// CHECK ROLE
if (user.role === "viewer") {

  return res.status(403).json({
    message:
      "Viewer cannot login",
  });
}

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE USER
const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.firstName = req.body.firstName || user.firstName;

    user.lastName = req.body.lastName || user.lastName;

    user.username = req.body.username || user.username;

    user.email = req.body.email || user.email;

    user.age = req.body.age || user.age;

    user.gender = req.body.gender || user.gender;

    user.role = req.body.role || user.role;

    user.contactNumber = req.body.contactNumber || user.contactNumber;

    user.address = req.body.address || user.address;

    if (req.body.isActive !== undefined) {
      user.isActive = req.body.isActive;
    }

    // UPDATE PASSWORD
    if (req.body.password && req.body.password.trim() !== "") {
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(req.body.password, salt);
    }

    await user.save();

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// TOGGLE STATUS
const toggleUserStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.isActive = !user.isActive;

    await user.save();

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// DELETE USER
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await user.deleteOne();

    res.json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// GET USERS
const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  updateUser,
  toggleUserStatus,
  deleteUser,
};

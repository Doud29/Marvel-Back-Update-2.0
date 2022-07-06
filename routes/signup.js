//-------------------------------------------------------------------//
//------------------------// Signup //-------------------------------//
//-------------------------------------------------------------------//

//-----------------// Packages
const express = require("express");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");
const router = express.Router();
const User = require("../Models/User");

router.post("/signup", async (req, res) => {
  console.log(req.fields);
  // console.log("la route signup a bien été sollicité");

  try {
    const { username, email, password } = req.fields;
    const IsUserexisting = await User.findOne({ email: email });
    // const avatarToUpload = req.files.avatar.path;
    // const result = await cloudinary.uploader.upload(avatarToUpload);
    // // return res.json(result);
    console.log(IsUserexisting, "base de donnée");

    if (IsUserexisting !== null) {
      res.json("cet email exitse déjà, vous devez le changer");
    } else {
      console.log("utilisateur");
      const salt = uid2(64);
      const hash = SHA256(password + salt).toString(encBase64);
      const token = uid2(64);
      const newUser = new User({
        username: username,
        email: email,
        token: token,
        hash: hash,
        salt: salt,
        // avatar: result.secure_url,
      });
      console.log(newUser);
      await newUser.save();
      return res.json({
        username: username,
        email: email,
        token: token,
        // avatar: result.secure_url,
      });
    }
  } catch (error) {
    res.status(400).json("Il manque quelques éléments");
  }
});

module.exports = router;

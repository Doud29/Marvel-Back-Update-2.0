//-----------------// Packages
const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(formidable());
app.use(cors());
//-----------------// connexion à mongoose (bonus)

mongoose.connect("mongodb://localhost:27017/Marvel-V2");

//-----------------// route Characters
const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

//-----------------// route Character
const characterRoutes = require("./routes/character");
app.use(characterRoutes);

//-----------------// route allcomics
const ComicsRoutes = require("./routes/comics");
app.use(ComicsRoutes);

//-----------------// route signup
const signupRoutes = require("./routes/signup");
app.use(signupRoutes);

//-----------------// route login
const loginRoutes = require("./routes/login");
app.use(loginRoutes);

//-----------------// Dans le cas d'une route inexistante
app.all("*", function (req, res) {
  res.json({ message: "Page Not Found" });
});

//-----------------// démarage serveur
app.listen(4000, () => {
  console.log("server has started");
});

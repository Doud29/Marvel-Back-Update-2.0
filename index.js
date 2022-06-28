//-----------------// Packages
const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const app = express();

app.use(formidable());
app.use(cors());
//-----------------// connexion à mongoose (bonus)

//-----------------// route Characters
const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

//-----------------// route Character
const characterRoutes = require("./routes/character");
app.use(characterRoutes);

//-----------------// route allcomics
const ComicsRoutes = require("./routes/comics");
app.use(ComicsRoutes);

//-----------------// Dans le cas d'une route inexistante
app.all("*", function (req, res) {
  res.json({ message: "Page Not Found" });
});

//-----------------// démarage serveur
app.listen(4000, () => {
  console.log("server has started");
});

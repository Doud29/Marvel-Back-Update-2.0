//-----------------// Packages
const express = require("express");
const formidable = require("express-formidable");
const app = express();
app.use(formidable());

//-----------------// connexion à mongoose (bonus)

//-----------------// route Characters
const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

//-----------------// Dans le cas d'une route inexistante
app.all("*", function (req, res) {
  res.json({ message: "Page Not Found" });
});

//-----------------// démarage serveur
app.listen(4000, () => {
  console.log("server has started");
});

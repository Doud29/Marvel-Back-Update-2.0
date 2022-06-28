//-------------------------------------------------------------------//
//------------------------// Comics //-------------------------------//
//-------------------------------------------------------------------//

//-----------------// Packages
const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/comics", async (req, res) => {
  console.log("la route characters a bien été sollicité");
  console.log(req.query);
  try {
    let comicsName = "";
    if (req.query.name) {
      comicsName = comicsName + `&title=${req.query.name}`;
    }

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=72ydvnidL7wgZOuO${comicsName}`
    );
    if (response.data) {
      console.log(response.data);
      res.json(response.data);
    } else {
      res.json("Base de données introuvables ");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

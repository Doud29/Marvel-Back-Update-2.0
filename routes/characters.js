//-------------------------------------------------------------------//
//------------------------// Characters //---------------------------//
//-------------------------------------------------------------------//

//-----------------// Packages
const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/characters", async (req, res) => {
  // console.log("la route characters a bien été sollicité")
  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=72ydvnidL7wgZOuO"
    );
    if (response.data) {
      // console.log(response.data);
      res.json(response.data);
    } else {
      res.json("Base de données introuvables ");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

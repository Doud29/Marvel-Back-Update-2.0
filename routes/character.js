//-------------------------------------------------------------------//
//------------------------// Character //---------------------------//
//-------------------------------------------------------------------//

//-----------------// Packages
const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/charcater/:id", async (req, res) => {
  console.log(req.params.id);
  //   res.json("la route character a bien été sollicité");
  if (req.params) {
    try {
      const response = await axios.get(
        `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.id}?apiKey=72ydvnidL7wgZOuO`
      );
      console.log(response.data);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(400).json("fichier introuvable");
    }
  } else {
    res.status(400).json("Id introuvable");
  }
});

module.exports = router;

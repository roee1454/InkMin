const express = require("express")
const router = express.Router();

router.post("/AdminAuth", (req, res) => {
  const adminPassword = process.env.ADMIN_PASSWORD
  const clientPassword = req.query.password
  if(clientPassword === adminPassword){
    return res.status(200).send("Correct Password")
  } else {
    return res.status(201).send("False Password")
  }
});

module.exports = router

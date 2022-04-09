const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const fs = require("fs");
const rawData = fs.readFileSync("./users.json");
const users = JSON.parse(rawData);
const { v4: uuid } = require("uuid");

router.get("/all", (req, res) => {
  res.status(200).json({ success: true, users: users });
});

router.post("/add", jsonParser, (req, res) => {
  let datas = {
    id: uuid(),
    firstName: req.body.firstName,
    email: req.body.email,
  };

  users.push(datas);
  let newUser = JSON.stringify(users, null, 2);
  fs.writeFile("users.json", newUser, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Utilisateur ajouté");
      res.send({ succes: true });
    }
  });
});

router.delete("/delete/:id", (req, res) => {
  const userId = req.params.id;

  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).send({ error: "Utilisateur non trouvé" });
  }

  users.splice(userIndex, 1);

  let newUsers = JSON.stringify(users, null, 2);
  fs.writeFileSync("users.json", newUsers);

  res.send({ success: true });
});

module.exports = router;

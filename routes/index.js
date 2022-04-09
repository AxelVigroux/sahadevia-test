const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

// Count users route.
router.get("/", function (req, res) {
  res.status(200).json({
    success: true,
    message: "Hello world!",
  });
});

// Count users route.
router.post("/hello-world", function (req, res) {
  res.status(200).json({
    success: true,
    message: "Hello world!",
  });
});

module.exports = router;

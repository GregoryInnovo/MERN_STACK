const { Router } = require("express");
const router = Router();

router.route("/").get((req, res) => {
  res.json({
    status: "notes",
  });
});

module.exports = router;

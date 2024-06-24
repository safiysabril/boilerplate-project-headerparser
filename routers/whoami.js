const { Router } = require("express");
const { getIPAddress } = require("../controllers/whoamiController");

router = Router();

router.route("/whoami").get(getIPAddress);

module.exports = router;
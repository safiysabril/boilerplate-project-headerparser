const { Router } = require("express");
const indexRouter = require("./whoami")

router = Router();

router.use("/", indexRouter);

module.exports = { router };
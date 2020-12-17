const router = require("express").Router();

const micCakesRouter = require("./mic/cakes");

router.use("/cakes", micCakesRouter);

module.exports = router;

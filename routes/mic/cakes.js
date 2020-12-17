const router = require("express").Router();

const { Cake } = require("../../db");

router.get("/", async (req, res) => {
   const cakes = await Cake.findAll();
   res.json(cakes);
});

router.get("/:cakeid", async (req, res) => {
   const cakes = await Cake.findOne({ where: { id: req.params.cakeid } });
   res.json(cakes);
});

router.post("/", async (req, res) => {
   const cakes1 = await Cake.create(req.body);
   res.json(cakes1);
});

router.put("/:cakeid", async (req, res) => {
   await Cake.update(req.body, {
      where: { id: req.params.cakeid },
   });
   res.json({ success: "update-->" });
});

router.delete("/:cakeid", async (req, res) => {
   await Cake.destroy({
      where: { id: req.params.cakeid },
   });
   res.json({ success: "delete-->" });
});

module.exports = router;

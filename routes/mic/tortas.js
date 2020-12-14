const router = require("express").Router();

const { Cake } = require("../../db");

router.get("/", async (req, res) => {
   const cakes = await Cake.findAll();
   res.json(cakes);
});

router.post("/", async (req, res) => {
   const cakes1 = await Cake.create(req.body);
   res.json(cakes1);
});

router.put("/:tortaid", async (req, res) => {
   await Cake.update(req.body, {
      where: { id: req.params.tortaid },
   });
   res.json({ success: "update-->" });
});

router.delete("/:tortaid", async (req, res) => {
   await Cake.destroy({
      where: { id: req.params.tortaid },
   });
   res.json({ success: "delete-->" });
});

module.exports = router;

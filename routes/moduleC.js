import express from "express";
const router = express.Router();

let data = []; // vaqtinchalik ma'lumotlar bazasi

// GET — barcha ma'lumotlarni olish
router.get("/", (req, res) => {
  res.send(data);
});

// POST — yangi ma'lumot qo‘shish
router.post("/", (req, res) => {
  const item = {
    ...req.body,
    id: Date.now().toString(), // har safar unique ID
  };

  data.push(item);

  res.send({
    message: "POST successful",
    item,
  });
});

// DELETE — id bo‘yicha o‘chirish
router.delete("/:id", (req, res) => {
  data = data.filter((x) => x.id !== req.params.id);
  res.send({ message: "Deleted" });
});

// UPDATE — id bo‘yicha o‘zgartirish
router.patch("/:id", (req, res) => {
  const item = data.find((x) => x.id === req.params.id);
  if (!item) return res.status(404).send("Item not found");

  Object.assign(item, req.body);

  res.send({
    message: "Updated",
    item,
  });
});

export default router;

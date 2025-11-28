import Moduleb from "../models/moduleB.js";

export const getAll = async (req, res) => {
  const data = await Moduleb.find();
  res.json(data);
};

export const createOne = async (req, res) => {
  const item = new Moduleb(req.body);
  await item.save();
  res.json(item);
};

export const getOne = async (req, res) => {
  const item = await Moduleb.findById(req.params.id);
  res.json(item);
};

export const deleteOne = async (req, res) => {
  await Moduleb.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

export const updateOne = async (req, res) => {
  const item = await Moduleb.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

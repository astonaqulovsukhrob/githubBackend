import Modulea from "../models/moduleA.js";

export const getAll = async (req, res) => {
  const data = await Modulea.find();
  res.json(data);
};

export const createOne = async (req, res) => {
  const item = new Modulea(req.body);
  await item.save();
  res.json(item);
};

export const getOne = async (req, res) => {
  const item = await Modulea.findById(req.params.id);
  res.json(item);
};

export const deleteOne = async (req, res) => {
  await Modulea.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

export const updateOne = async (req, res) => {
  const item = await Modulea.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

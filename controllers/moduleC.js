import Modulec from "../models/moduleC.js";

export const getAll = async (req, res) => {
  const data = await Modulec.find();
  res.json(data);
};

export const createOne = async (req, res) => {
  const item = new Modulec(req.body);
  await item.save();
  res.json(item);
};

export const getOne = async (req, res) => {
  const item = await Modulec.findById(req.params.id);
  res.json(item);
};

export const deleteOne = async (req, res) => {
  await Modulec.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

export const updateOne = async (req, res) => {
  const item = await Modulec.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

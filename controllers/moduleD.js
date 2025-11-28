import Moduled from "../models/moduleD.js";

export const getAll = async (req, res) => {
  const data = await Moduled.find();
  res.json(data);
};

export const createOne = async (req, res) => {
  const item = new Moduled(req.body);
  await item.save();
  res.json(item);
};

export const getOne = async (req, res) => {
  const item = await Moduled.findById(req.params.id);
  res.json(item);
};

export const deleteOne = async (req, res) => {
  await Moduled.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

export const updateOne = async (req, res) => {
  const item = await Moduled.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

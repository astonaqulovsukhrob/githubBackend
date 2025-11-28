import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  title: String,
  moduleA: String,
  moduleB: String,
  moduleC: String,
  moduleD: String,
  img: String,
});

export default mongoose.model("Modulea", schema);

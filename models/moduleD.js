import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  title: String,
  var: String,
  img: String,
});

export default mongoose.model("Moduled", schema);

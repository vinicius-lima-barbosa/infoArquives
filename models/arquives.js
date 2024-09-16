import mongoose, { Schema } from "mongoose";

const arquiveSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Arquive =
  mongoose.models.Arquive || mongoose.model("Arquive", arquiveSchema);

export default Arquive;

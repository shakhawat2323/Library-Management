import { Schema, model, Document } from "mongoose";

export interface IBorrow extends Document {
  book: string;
  quantity: number;
  dueDate: Date;
}

const borrowSchema = new Schema<IBorrow>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity must be greater than 0"],
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const Borrow = model<IBorrow>("Borrow", borrowSchema);

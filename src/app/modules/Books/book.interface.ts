import { Document } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  img: string;
  price: number;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";

  isbn: string;
  description?: string;
  copies: number;
  available?: number;
}

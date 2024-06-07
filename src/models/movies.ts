import { Schema, model, Document } from 'mongoose';

export interface IMovie extends Document {
  id:number;
  title: string;
  year: number;
  genre: string;
  banner_image: string;
}

const MovieSchema = new Schema<IMovie>({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  banner_image: {
    type: String,
    required: true
  }
});

export const MovieModel = model<IMovie>('Movie', MovieSchema);

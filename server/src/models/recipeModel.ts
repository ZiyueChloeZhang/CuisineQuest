import mongoose, { Document, Schema } from 'mongoose';

interface IRecipe extends Document {
  title: string;
  description: string;
}

// TODO
const RecipeSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Recipe = mongoose.model<IRecipe>('Recipe', RecipeSchema);

export default Recipe;

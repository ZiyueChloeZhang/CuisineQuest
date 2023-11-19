import mongoose, { Document, Schema } from 'mongoose';

interface IRecipe extends Document {
  
}

// TODO
const RecipeSchema: Schema = new Schema({
  id: { type: String, required: true},
  name: { type: String, required: true },
  time: { hours: { type: Number, required: true }, 
    minutes: { type: Number, required: true } },
  servings: { type: Number, required: true },
  likes: { type: Number, required: true },
  ingredients: [ { name: { type: String, required: true }, 
    quantity: { type: String, required: true }} ],
  instructions: [{ type: String, required: true }],
  tags: [{ type: String, required: true }],
  restrictions: [{ type: String, required: true }],
  img: { type: String },
  location: { type: String, required: true}
});

const Recipe = mongoose.model<IRecipe>('Recipe', RecipeSchema);

export default Recipe;

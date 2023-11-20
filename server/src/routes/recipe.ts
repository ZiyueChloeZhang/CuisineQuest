import { Router, Request, Response } from 'express';
import Recipe from '../models/recipeModel';

// Create new router object
const router = Router(); 

router.get('/', async (req: Request, res: Response) => {
  try {
    var loc = req.query.location;
    const recipes = await Recipe.find({ location: loc }).select("name time likes img").limit(10);
    console.log(recipes);
    res.json(recipes);
  } catch (error) {
    res.status(500).send(error); 
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const newRecipe = {
      name: req.body.name,
      time: req.body.time,
      servings: req.body.servings,
      likes: req.body.likes,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      tags: req.body.tags,
      restrictions: req.body.restrictions,
      location: req.body.location,
      img: req.body.img};
    
    console.log("created newRecipe");
    const recipe = await Recipe.create(newRecipe);

    return res.status(201).send({_id : recipe._id});

  } catch (error) {
    res.status(500).send(error); 
  }
});

export default router;
import { Router, Request, Response } from 'express';
import Recipe from '../models/recipeModel';

// Create new router object
const router = Router(); 

router.get('/', async (req: Request, res: Response) => {
  try {
    var loc = req.query.location;
    const recipes = await Recipe.find({ location: loc }).select("name time likes img").limit(10);
    res.json(recipes);
  } catch (error) {
    res.status(500).send(error); 
  }
});



export default router;
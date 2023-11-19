import { Router, Request, Response } from 'express';
import Recipe from '../models/recipeModel';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import recipesRoute from './routes/recipe';

import bodyParser from 'body-parser';

//For env File 
dotenv.config();
const MONGO_URI = process.env.MONGO_URI || "";

const app: Application = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use('/recipes', recipesRoute);


app.listen(PORT, () => {
  console.log(`Server is Fire at http://localhost:${PORT}`);
});
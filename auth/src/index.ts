
import mongoose from "mongoose";
import { app } from './app'


const start = async () => {
  try {
    if (!process.env.JWT_KEY) {
      throw new Error('JWT_KEY must be defined')
    }
    if (process.env.ENV == 'kuber') {
      console.log("----------------------")
      await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    }
    else {
      await mongoose.connect('mongodb://localhost:27017/auth');

    }
    console.log('Connected to MongoDb')
  } catch (error) {
    console.log(error)
  }
}

app.listen(3000, async () => {
  console.log("Listening on port 3000!!!!!!!!");
});
start()

import mongoose from "mongoose";
import { app } from './app'
import { natsWrapper } from "./nats-wrapper";

const start = async () => {
  try {
    if (!process.env.JWT_KEY) {
      throw new Error('JWT_KEY must be defined')
    }
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO URI must be defined')
    }

    console.log("----------------------")
    console.log(process.env.NODE_ENV)
    console.log("----------------------")
     if(process.env.NODE_ENV=='dev') {

      await mongoose.connect('mongodb://localhost:27017/auth');

    }
    else{
      console.log(process.env.MONGO_URI);
      await natsWrapper.connect('ticketing', '134sf', 'http://nats-srv:4222')
      await mongoose.connect(process.env.MONGO_URI);

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
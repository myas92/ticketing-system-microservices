
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
    if (!process.env.NATS_CLIENT_ID) {
      throw new Error('NATS_CLIENT_ID must be defined');
    }
    if (!process.env.NATS_URL) {
      throw new Error('NATS_URL must be defined');
    }
    if (!process.env.NATS_CLUSTER_ID) {
      throw new Error('NATS_CLUSTER_ID must be defined');
    }

    console.log("----------------------")
    console.log(process.env.NODE_ENV)
    console.log("----------------------")
    if (process.env.NODE_ENV == 'dev') {

      await mongoose.connect('mongodb://localhost:27017/auth');

    }
    else {
      console.log(process.env.MONGO_URI);
      await natsWrapper.connect(    
        process.env.NATS_CLUSTER_ID,
        process.env.NATS_CLIENT_ID,
        process.env.NATS_URL);
      //Close NATS connection
      natsWrapper.client.on('close', () => {
        console.log('NATS connection closed!');
        process.exit();
      })
      process.on('SIGINT', () => natsWrapper.client.close());
      process.on('SIGTERM', () => natsWrapper.client.close());
      
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
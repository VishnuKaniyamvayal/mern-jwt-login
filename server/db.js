import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectToDb = () => {
    try {
        mongoose.connect( process.env.DB , options)
        console.log("connnection successful");
    } catch (error) {
        console.log("connnection unsuccessful");
        console.log(error);
        
    }
}

export default connectToDb;

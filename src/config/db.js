import mongoose from "mongoose"

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URL).then((e)=>{
    console.log(`Connection to database  ==>  ${e.connection.name}`)
  });
};

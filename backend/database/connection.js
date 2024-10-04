import mongoose from "mongoose";

export const dbConnection = async() => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};

// export const dbConnection = async () => {
//   await mongoose
//     .connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
//     .then(() => console.log("DB connected"))
//     .catch((err) => console.error("DB connection error:", err));
// };
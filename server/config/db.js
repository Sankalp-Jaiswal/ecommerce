import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;








// import mongoose from "mongoose";

// const connectDB = async () => {
//   mongoose.connection.on("connected", () => {
//     console.log("connected to database");
//   });

//   await mongoose.connect(process.env.MONGODB_URI);

//     try {
//       const conn = await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (err) {
//       console.error(err);
//       process.exit(1);
//     }
// };

// export default connectDB;

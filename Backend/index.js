// import express from 'express';
// import dotenv from 'dotenv'
// import mongoose from 'mongoose';
// import bookRoute from './route/book.route.js'
// import userRoute from './route/user.route.js';  
// import cors from 'cors'
// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json())
// const PORT = process.env.PORT || 4000;

// try {
//   mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    
//     mongoose.connection.on("connected", () => {
//       console.log("MongoDB connected successfully");
//     });
//     mongoose.connection.on("error", (err) => {
//       console.error("MongoDB connection error: ", err);
//     });

// } catch (error) {
//     console.log("Error: ",error);
    
// }

// app.use("/book", bookRoute)
// app.use("/user",userRoute )

// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);
// });


import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';  
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Error: MONGODB_URI is not defined in environment variables.");
  process.exit(1); // Exit the process if MongoDB URI is missing
}

// Database connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process on connection failure
  });

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

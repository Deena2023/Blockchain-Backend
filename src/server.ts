import express from "express";
import bodyParser from 'body-parser';
import todoRoute from "./routes/todoRoute.js";
import cors from "cors";



// We will create an express app
const app = express();

const corsOptions ={
  origin:'http://localhost:5173', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));

// The port that the express server will listen on
const PORT = 3002;

app.use(express.json());

// We define our first route
app.use("/api/todo", todoRoute);

// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

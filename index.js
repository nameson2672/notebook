
// Importing packages
import express from "express";
import dotenv from "dotenv";
import path from 'path'

dotenv.config();

// Setup express server
const app = express();

const __dirname = path.resolve();

  app.use(express.static(path.join(__dirname, "./book")))
  app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'book',  'index.html'))
  })


// Set lisner port
const port =process.env.PORT || 3000;
app.listen(
  port,
  console.log(`API is running on port ${port}`)
);
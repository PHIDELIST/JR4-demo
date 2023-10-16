// Import the express library
import express from 'express';

// Create an instance of an express application
app.use(express)

// Define the port the server will run on
const PORT = 3000;

// Define a route for the root path of the application
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

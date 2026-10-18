/*
 * Import the express module
 * ES modules syntax allows us to use import/export 
      * like in modern JavaScript and React applications
 */
import express from 'express';

// Create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3002;

app.use(express.static('public'));

/*
 * Define the root path ('/')
 * When someone visits our website's home page, this 
 * anonymous function will execute.
 * req: contains information about the incoming request
 * res: allows us to send back a response to the client
 */
app.get('/', (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});


/*
 * Start the server and tell it listen on the port
 * specified above. Note the backticks!
 */
app.listen(PORT, () => {
console.log(`Server is running at http://localhost:${PORT}`);
});

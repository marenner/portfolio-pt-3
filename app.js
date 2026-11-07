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

// Create an array to store submissions
const submits = [];

app.use(express.static('public'));

// Add "middleware" to allow the app to parse form data
// Access form data through req.body
app.use(express.urlencoded({extended: true}));

/*
 * Define the root path ('/')
 * When someone visits our website's home page, this 
 * anonymous function will execute.
 * req: contains information about the incoming request
 * res: allows us to send back a response to the client
 */
app.get('/', (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/contact.html`);
});

app.post('/submit', (req, res) => {

    // Create a JSON object to store order data
    const submit = req.body;
    submit['timestamp'] = new Date();

    // Add order object to orders array
    submits.push(submit);

    console.log(submits);

    // Display confirmation page
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

// Add an admin route
// Add an admin route
app.get('/admin', (req, res) => {
    res.send(submits);
});

/*
 * Start the server and tell it listen on the port
 * specified above. Note the backticks!
 */
app.listen(PORT, () => {
console.log(`Server is running at http://localhost:${PORT}`);
});

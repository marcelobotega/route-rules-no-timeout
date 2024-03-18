import express from "express";

const app = express();
const port = 3001;

// Define your API endpoint
app.get('/delayed-response', (req, res) => {
    // Set a timeout of 5 seconds before sending the response
    console.log('Received a request for a delayed response')
    setTimeout(() => {
        res.send('This is a delayed response after 5 seconds');
    }, 5000); // 5 seconds delay
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

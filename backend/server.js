const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config(); //Dotenv is a zero-dependency library or module that exists in most programming languages, which loads environment variables from a . env file for easier management.

const cors = require('cors'); //Cross-origin resource sharing is a mechanism that allows a web page to access restricted resources from a server on a domain different than the domain that served the web page.

const app = express();
const PORT = process.env.PORT || 5000;

const routes = require("./routes/taskRoute");

app.use(express.json()); //app.use(express.json()) is used to add a middleware function that parses incoming requests with JSON payloads. This middleware is essential for handling requests where the client sends data in JSON format, such as in POST, PUT, or PATCH requests.
app.use(cors()); 

app.use("/api",routes);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connected....");
}).catch((err) => console.log(err));





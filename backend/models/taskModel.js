const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    }
});

/*In Mongoose, a schema is a structure that defines 
the shape and content of the documents within a MongoDB collection. 
It specifies the types of data and constraints for each field in the documents. 
Schemas serve as the blueprint for the data that will be stored in the MongoDB database, 
providing a way to enforce data consistency and integrity. */


module.exports = mongoose.model("Task", taskSchema); 
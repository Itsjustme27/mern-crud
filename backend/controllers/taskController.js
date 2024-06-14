const taskModels = require("../models/taskModel");

module.exports.getTasks = async(req, res) => {
    const tasks = await taskModels.find();
    res.send(tasks);
    // res.send("Hii");
}

module.exports.saveTasks = (req, res) => {
    const {task} = req.body;
    taskModels.create({task}).then((data) => {
        console.log("Save Successful...");
        res.status(201).send(data);
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong"});
    })
//    res.send("Hello");
}

module.exports.updateTasks = (req, res) => {
    const {id} = req.params;
    const {task} = req.body;
    taskModels.findByIdAndUpdate(id, {task}).then(() => {
        res.send("Update Successfull");
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong"});
    })
}

module.exports.deleteTasks = (req, res) => {
    const {id} = req.params;

    taskModels.findByIdAndDelete(id, {task}).then(() => {
        res.send("Delete Successful!");
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong"});
    })
}
const mongoose = require("mongoose")


const TodoListSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
 
    isChecked: {
        type: Boolean,
        default: false,
    }
})


module.exports = mongoose.model("TodoList", TodoListSchema)
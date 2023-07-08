import mongoose from 'mongoose';


const todoTaskSchema = new mongoose.Schema(
{
    title:{
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    color:{
        type: String,
        required: true,
        default: '#FFFFFF'
    }
})



//const TodoTask = new mongoose.model('TodoTaks',todoTaskSchema);

//module.exports = mongoose.model('TodoTask',todoTaskSchema);
const TodoTask = mongoose.model('TodoTask', todoTaskSchema);

export default TodoTask;
//module.exports =  mongoose.model('TodoTask',todoTaskSchema);
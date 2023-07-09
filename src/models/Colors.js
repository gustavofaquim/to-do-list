import mongoose from 'mongoose';


const colors = new mongoose.Schema(
{
    name:{
        type: String,
        required: true
    },
    code:{
        type: String,
        require: true
    }
})



//const TodoTask = new mongoose.model('TodoTaks',todoTaskSchema);

//module.exports = mongoose.model('TodoTask',todoTaskSchema);
const Colors = mongoose.model('Colors', colors);

export default Colors;
//module.exports =  mongoose.model('TodoTask',todoTaskSchema);
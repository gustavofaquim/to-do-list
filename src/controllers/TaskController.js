//models
import TodoTask from '../models/TodoTask.js'


class TaskController{


    async index (req,res){
       
        try{
            const tasks =  await TodoTask.find();
            res.render("todo.ejs", {todoTasks: tasks});
        } catch (err){
            res.status(500).json(err)
        }
    }
    
    async store(req,resp){
        const todoTask = new TodoTask({
            title: req.body.title,
            content: req.body.content
        });
        try{
            await todoTask.save();
            console.log(todoTask)
            resp.redirect('/');
        } catch(err){
            console.log(err)
            resp.redirect("/");
    
        }
        //console.log(req.body);
    }

    add(req, res){
        res.render("../views/addTasks.ejs");
    }

    async edit(req,res) {
        const id = req.params.id;

        const todoTasks = await TodoTask.find();
        res.render("todoEdit.ejs", {todoTasks, idTask: id});
    }

    async update(req,res){
        const id = req.params.id;
        TodoTask.findByIdAndUpdate(id, {content: req.body.content})
        .then(
            () =>  res.redirect("/"),
            err =>  res.send(500,err)
        )
    }

    delete(req, res){
        const id = req.params.id;
        TodoTask.findOneAndRemove(id)
        .then(
            () => res.redirect('/'),
            err => res.send(500,err)
        )
    }
}

// padrão Singleton
export default new TaskController()
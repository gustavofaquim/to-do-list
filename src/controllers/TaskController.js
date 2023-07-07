//models
import TodoTask from '../models/TodoTask.js'


class TaskController{


    async index (req,res){
       
        try{
            const tasks =  await TodoTask.find();
            res.render("todo.ejs", {todoTasks: tasks, });
        } catch (err){
            res.status(500).json(err)
        }
    }
    
    /*async store(req,resp){
        const todoTask = new TodoTask({
            title: req.body.title,
            content: req.body.content
        });
        
        try{
            await todoTask.save();
            
            const tasks =  await TodoTask.find();
            resp.render('lista-dados', {tasks});
           
        } catch(err){
            console.log(err)
            //resp.json({message: 'Deu erro!'})
            resp.redirect('/');
    
        }
        
    }*/

    async store(req, resp) {
        const { title, content } = req.body;
      
        // Validação dos campos de entrada
        /*if (!title || !content) {
          return resp.status(400).json({ error: 'Campos obrigatórios não fornecidos' });
        }*/
      
        const todoTask = new TodoTask({
          title: title,
          content: content
        });
      
        try {
          // Salva os dados no banco de dados
          await todoTask.save();
      
          // Busca a lista atualizada de tarefas
          const tasks = await TodoTask.find();
      
          // Retorna a lista atualizada como resposta JSON
          return resp.status(200).json({ tasks });
        } catch (error) {
          console.error(error);
      
          // Lida com o erro de forma adequada
          return resp.status(500).json({ error: 'Ocorreu um erro ao salvar os dados' });
        }
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

    delete(req, res) {
        console.log('Entrou aquiiiii');
        const id = req.params.id; // Use req.params.id para acessar o ID fornecido na rota
      
        TodoTask.findOneAndRemove({ _id: id })
          .then(
            () => res.json({ message: 'Arquivo excluído com sucesso' }),
            err => res.status(500).json({ error: err })
          );
    }
}

// padrão Singleton
export default new TaskController()
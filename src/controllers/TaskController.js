//models
import TodoTask from '../models/TodoTask.js'
import Colors from '../models/Colors.js'


class TaskController{


    async index (req,res){
       
        try{
            const tasks =  await TodoTask.find();
            const colors =  await Colors.find();
            res.render("todo.ejs", {todoTasks: tasks, colors: colors });
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
        const { title, content, color } = req.body;

      
        // Validação dos campos de entrada
        if (title || content) {
          
          const todoTask = new TodoTask({
            ...(title && { title }),
            ...(content && { content }),
            ...(content && { color })
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
      
      
      
        
      }
      

    async add(req, res){

       try{
            const colors =  await Colors.find();
            res.render("../views/addTasks.ejs", {colors: colors });

        } catch (err){
            res.status(500).json(err)
        }
        
        
        //res.render("../views/addTasks.ejs");
    }

    async edit(req,res) {
        const id = req.params.id;

        const todoTasks = await TodoTask.find();
        res.render("todoEdit.ejs", {todoTasks, idTask: id});
    }

    async update(req, resp) {
      try {
        const id = req.params.id;
        const { content } = req.body;
    
        if (!content) {
          return resp.status(400).json({ error: 'O campo content é obrigatório.' });
        }
    
        await TodoTask.findByIdAndUpdate(id, { content });
    
        // Retorna a lista atualizada como resposta JSON
        return resp.status(200).json({ success: 'Deu tudo certo ;)' });

      } catch (err) {
        console.error(err);
        return resp.status(500).json({ error: 'Deu um problema ao atualizar :(' });
      }
    }
    

    delete(req, res) {
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


import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose  from "mongoose";

import TaskController from "./src/controllers/TaskController.js";



// Configurando módulo ejs e a chamada das views
app.set("view engine", "ejs");
app.set('views', './src/views');
app.use("/static", express.static("public"));



dotenv.config();




app.use(express.urlencoded({ extended: false })); // Extrair dados do formulário e adicionar ao body
app.use(express.json());


//Conexão com o banco


mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true })
    .then(
        () => {
            console.log("Connected to db!");
            app.listen(3000, () => console.log("Servidor instalado e funcionando"));
        }
    );



   

// Rotas 
app.get('/',  TaskController.index)
app.get('/add', TaskController.add)
app.post('/save', TaskController.store)
app
    .route('/edit/:id')
    .get( TaskController.edit)
    .post(TaskController.update)
//app.get('/edit/:id', TaskController.edit)
//app.put('/edit/:id', TaskController.update)
//app.delete('/remove/:id', TaskController.delete) -> chamando assim não funciona
app.post('/remove', TaskController.delete)





const express = require('express');
const { createTodo, updateTodo } = require('./types');
const {todo} = require('./db')
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())

app.post('/todo', async (req, res) => {
    const payload = req.body;
    const validateTodo = createTodo.safeParse(payload);
    if(!validateTodo.success){
      res.status(403).json({msg: "wrong inputs!"});
    }

    await todo.create({title: payload.title, description: payload.description, completed: false});
    res.json({msg: "todo created!"})
});

app.get('/todos', async (req, res) => {
    const todos = await todo.find();
    res.json({todos});
});

app.put('/completed', async (req, res) => {
    const id = req.body;
    const validateId = updateTodo.safeParse(id);
    if(!validateId.success){
      req.status(403).json({msg: "wrong input"});
    }

    await todo.updateOne({_id: req.body.id}, {completed: true});
    res.json({msg: "todo marked as completed!"});
});

app.listen(3000);
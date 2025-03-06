const mongoose = require('mongoose');

mongoose.connect('mongodb://sulemanwaraich094:vasion123@cluster0-shard-00-00.1bqjj.mongodb.net:27017,cluster0-shard-00-01.1bqjj.mongodb.net:27017,cluster0-shard-00-02.1bqjj.mongodb.net:27017/todoApp?replicaSet=atlas-pobgge-shard-0&ssl=true&authSource=admin');

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const todo = mongoose.model('Todo', todoSchema);

module.exports = {
  todo
}
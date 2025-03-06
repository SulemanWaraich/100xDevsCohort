import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
    .then( async (res) => { const result = await res.json(); setTodo(result.todos)})
  }, [])

  return (
    <>
      <CreateTodo />
      <Todos todo={todo}/>
    </>
  )
}

export default App

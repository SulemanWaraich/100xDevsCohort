import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(n) {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://dummyjson.com/todos")
        .then(res => {
          console.log(res.data.todos);
          console.log(res.data);
          setTodos(res.data.todos);
          setLoading(false);
        })
    }, n * 1000)
  
    axios.get("https://dummyjson.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })

    return () => {
      clearInterval(value)
    }
  }, [n])

  return {todos, loading};
}


function DataFetchingHook() {

  const {todos, loading} = useTodos(10);

  if (loading) {
    return <div> loading... </div>
  }


  return (
  <>
     {todos.map(todo => <Track todo={todo} />)}
  </>
  )
}


function Track({ todo }) {
  return <div>
    {todo.todo}
    <br />
    {/* {todo.description} */}
  </div>
}


export default DataFetchingHook
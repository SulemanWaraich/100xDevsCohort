import React from 'react'

function Todos({todo}) {
  return (
    <div>
      {todo.map((item) => {
        return <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>  
        </div>
      })}
    </div>
  )
}

export default Todos
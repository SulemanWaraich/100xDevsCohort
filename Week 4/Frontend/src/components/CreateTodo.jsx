import React, { useState } from 'react'

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div style={{margin: 20}}>
      <input type="text" placeholder='title' style={{padding: 5, margin: 5}} onChange={(e)=>{setTitle(e.target.value)}}/> <br />
      <input type="text" placeholder='description' style={{padding: 5, margin: 5}} onChange={(e)=>{setDescription(e.target.value)}}/> <br />
      <button 
      style={{margin: 5}} 
      onClick={()=>{ 
        fetch("http://localhost:3000/todo", {method: "POST", body: JSON.stringify({title: title, description: description}), headers: {"content-type": "application/json"}})
        .then(()=>{alert("Todo added");}) 
      }}
      >Create</button>
    </div>
  )
}

export default CreateTodo;
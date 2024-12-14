import React from 'react' ;

function TodoItem({todo ,toggleTodo, deleteTodo })
{
  return(
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>

      <span onClick={()=> toggleTodo(todo.id)}> {todo.text}</span>
      <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
      
      </div>
  );
}


export default TodoItem;
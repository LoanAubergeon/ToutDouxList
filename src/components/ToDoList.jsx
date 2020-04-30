
import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({todos, remove}) => {
    // Map through the todos
    const todoNode = todos.map((todo) => {
      return (
      <ToDo content={todo.content} key={todo.id} remove={remove}/>
      )
    });

    return (
        <ul> {todoNode} </ul>
    );
}

export default ToDoList;
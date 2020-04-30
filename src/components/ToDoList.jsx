
import React from 'react'
import ToDo from './ToDo'

import { List } from 'semantic-ui-react'

const ToDoList = ({todos, remove}) => {
    // Map through the todos
    const todoNode = todos.map((todo) => {
      return (
      <ToDo todo={todo} key={todo.id} remove={remove}/>
      )
    });

    return (
      <List divided relaxed>
        {todoNode} 
      </List>
    );
}

export default ToDoList;
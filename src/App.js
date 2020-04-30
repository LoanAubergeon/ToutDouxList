import React from 'react';
import './App.css';

import Title from './components/Title'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import ToDo from './components/ToDo'

import { Container } from 'semantic-ui-react'

window.id = 0;

class App extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
  }

  // Add todo handler
  addTodo(content) {
    // Create data
    const todo = {content: content, id: window.id++}
    // Add data in state
    this.state.data.push(todo);
    // Update state
    this.setState({data: this.state.data});
  }

  // Remove todo handler
  removeTodo(id) {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id){
        return todo;
      }
    });
    // Update state with filter
    this.setState({data: remainder});
  }

  render(){
    return (
      <div className="App">
        <Container>
          <Title/>
          <ToDoForm
            addTodo={this.addTodo.bind(this)}
          />
          <ToDoList 
            todos={this.state.data} 
          />
          <ToDo></ToDo>
        </Container>
      </div>
    );
  }
}

export default App;

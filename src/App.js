import React from 'react';
import ReactDOM from "react-dom";

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


const todoLists = [
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      
      todoLists,//todoLists: todoLists,
    }
  }

  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoLists: [...this.state.todoLists, newTask]
    })
  }

  toggleTask = clickedId  => {
    const updatedTodoLists = this.state.todoLists.map(taskTog =>{
      if (taskTog.id === clickedId){
        return{...taskTog, completed: !taskTog.completed,
        };
      } else {
        return taskTog;
      }
    })
    this.setState({
      todoLists: updatedTodoLists
    })
  };
  
  
  clearCompletedTasks = (event) => {
    event.preventDefault()
    const clearCompleted = this.state.todoLists.filter(taskComplete => {
      if (taskComplete.completed === false){
        return taskComplete
      }
    })
    this.setState({
      todoLists: clearCompleted
    })
  };
  
  
  
  render() {
    return (
      <div style = {{padding: '1rem',margin: '10rem',border: '2px solid orange'  }}>
        <h2 style = {{textAlign: 'center', backgroundColor: 'lime', borderRadius: '2rem', height: '35px'}}>
                  Welcome to your Todo App!</h2>     
          <TodoForm addTask = {this.addTask} clearCompletedTasks = {this.clearCompletedTasks}/>
    
          <TodoList todoLists = {this.state.todoLists} toggleTask = {this.toggleTask} />
      </div>
    );
  }
}

export default App;

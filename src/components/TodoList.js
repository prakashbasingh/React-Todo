import React from "react";

import Todo from './Todo'



// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


const TodoList = props => {
    return (
        <div>
            <h3>Todo List</h3>
            {props.todoLists.map(task => {
                return (
                <Todo key = {task.id} 
                      task={task}
                      toggleTask={props.toggleTask}
                      completed={task.completed}
                      id={task.id}/>
                )
            })}

        </div>
    )


}
export default TodoList
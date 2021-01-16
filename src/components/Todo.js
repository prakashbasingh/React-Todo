import React from "react";



const Todo = props => {
    return (
        //className = {`task${props.task.completed ? 'completed' : ''}`
        <div onClick = { () => props.toggleTask(props.id)}
        style = {{
            textDecoration: props.completed?'line-through' : 'none',
            color: props.completed? 'red': 'none'
        }} >
            <p style = {{ backgroundColor:'lightgray', fontSize:'20px', borderRadius: '2rem', height: '40px' }}>
                {props.task.name}</p>
        </div>
    )
}
export default Todo
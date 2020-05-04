// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


const TodoList = props => {
    return (
        <div>
            {props.todoLists.map(todo => (
                <Todo key = {todo.id} toto = {todo} />
            ))}


        </div>
    )


}
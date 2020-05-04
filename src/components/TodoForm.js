import React from "react";




class TodoForm extends   React.Component {
    constructor() {
        super();
        this.state = {
            keyword: ''

        };
    }
    handleChanges = e => {
        this.setState ({
            keyword: e.target.value
        },//() => console.log(this.state.keyword)
        );
    };



    render() {
        return (
            <form onSubmit = {this.submitForm}>
                <input  onChange = {this.handleChanges}
                        type = 'text'
                        name = 'task'
                        value = {this.state.keyword}
                        />
                <button> Add Todo </button>
                <button> Clear Completed </button>

            </form>




        )
    }





}
export default TodoForm
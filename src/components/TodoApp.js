import React, { useRef } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoAction";

const mapStateToProps = (state) => ({
    todos: state.todoReducer.todos
})


function TodoApp({ todos, addTodo }) {
    const todoForm = useRef(null);

    const addNewTodo = (e) => {
        e.preventDefault();
        const form = todoForm.current;
        let todoName = form['todo_name'].value;

        addTodo({
            name: todoName,
            complete: false
        });

        return form['todo_name'].value = '';
    }

    return (
        <React.Fragment>
            <form ref={todoForm}>
                <p>
                    <input type="text" name="todo_name" />
                    <button onClick={addNewTodo}>Add Todo</button>
                </p>
            </form>

            <table border="1" width="500" style={{ textAlign: "left" }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(todos).length === 0 ? 'Todo list is empty' : todos.map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.complete ? "Complete" : "Uncomplete"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, { addTodo })(TodoApp);
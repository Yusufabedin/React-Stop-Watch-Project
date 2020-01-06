import React, { Fragment } from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList =  todos.map(todo => (
        <ul className="list-group" key={ todo.id }>
            <li className="list-group-item">Name: { todo.name }</li>
            <li className="list-group-item">age: { todo.age }</li>
            <li className="list-group-item">position: { todo.position }</li>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete Todo</button>
        </ul>
    ))

    return(
        <div className="col-md-6 offset-md-3">
            <h1 className="text-center display-1">Todos</h1>
             {todoList}
        </div>
    )
}

export default Todos;
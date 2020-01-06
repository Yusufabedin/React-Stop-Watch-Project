import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [coders, setCoders] = useState({
        name: '',
        age: '',
        position: ''
    })

    const changeHanlder = e => setCoders({ ...coders, [e.target.name] : e.target.value  })
        

    const handleSubmit = e => {
        e.preventDefault();
        coders.id = Math.random() * 10;
        coders.name && coders.age && coders.position && addTodo(coders)
       
    }

    return(
        <div className="col-md-6 offset-md-3">
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" className="form-control" name="name" onChange={changeHanlder}/>
                <input type="text" name="age" className="form-control mt-4"  onChange={changeHanlder}/>
                <input type="text" name="position" className="form-control mt-4" onChange={changeHanlder}/>
                <input type="submit" value="Add Todo" className="mt-4 btn btn-block btn-info mb-5"/>
            </form>
        </div>
    )
}


export default AddTodo;
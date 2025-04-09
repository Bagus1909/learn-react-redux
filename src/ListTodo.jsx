import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { removeTodo } from "./todoListSlice";

const ListTodo = () => {
  const todos = useSelector((state) => state.todolist);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>List Todo</h1>
      <Link to='/todolist/add'>Add Todo</Link>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>
                <Link to={`/todolist/${todo.id}/edit`}>Edit</Link>
                <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;

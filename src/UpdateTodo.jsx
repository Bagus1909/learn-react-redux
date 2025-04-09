import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getTodo, updateTodo } from "./todoListSlice.js";

export default function UpdateTodo() {
  const params = useParams();
  const todo = useSelector((state) => getTodo(state, Number(params.id)));
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(updateTodo({ id: todo.id, name: name }));
    navigate("/todolist");
  }

  return (
    <div>
      <h1>Add Todo</h1>
      <input
        type={"text"}
        value={name}
        placeholder={"Enter todo name"}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

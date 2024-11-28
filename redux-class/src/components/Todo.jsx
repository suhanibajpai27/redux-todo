import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const clickHandler=(id)=>{
  console.log(id);
  dispatch(deleteTodo(id));
  }

  return (
    <>
    <AddForm/>
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{width:"fit-content"}}>{todo.task}
           <button onClick={()=>clickHandler(todo.id)}>Delete</button>
          </li>
         
        ))}
      </ul>
    </>
  );
}

import { useSelector } from "react-redux";
import AddForm from "./addForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

 const Todo = () =>  {


     const todos = useSelector((state) => state.todos);
     const dispatch = useDispatch();
     console.log(todos);
     


     const clickHandler = (id) => {
        console.log("Deleted", id);
        dispatch(deleteTodo(id));
     }
    return(
        <>
        <AddForm />
        <h2>Todo List App</h2>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.task}
                <button onClick={() => clickHandler(todo.id)}>delete</button>
                </li>))}
        </ul>
        </>
    );
}

export default Todo;
import { useSelector } from "react-redux";

 const Todo = () =>  {
     const todos = useSelector((state) => state.todos);
     console.log(todos);
    return(
        <>
        <h2>Todos</h2>
        </>
    );
}

export default Todo;
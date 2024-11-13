import axios from "axios";
import { useEffect, useState } from "react";

const TodoList = () => {
  // Created the state to save the todos list.
  const [todos, setTodos] = useState([]);

  // The url to fetch the mock response.
  const url = "https://jsonplaceholder.typicode.com/todos/";

  // Function to fetch the todos.
  const fetchTodos = async () => {
    try {
      const todos = await axios.get(url);
      setTodos(todos?.data);
    } catch (error) {
      console.error("Error occured while fetching todos", error.message);
    }
  };

  const removeTodos = (id) => {
    setTodos((prev) => prev.filter((p) => p.id !== id));
  };

  useEffect(() => {
    // executes at first render only
    fetchTodos();
  }, []);

  return (
    <div className="w-12/12 grid sm:grid-cols-1  md:grid-cols-2  ">
      <div className="col-span-1  border border-1 border-black sm:px-5 md:px-5">
        <h2 className="font-bold text-xl">Todos</h2>
        <div>
          {todos &&
            todos?.map((todo) => (
              <div className="ms-3" key={todo.id}>
                <h2 className="font-bold text-lg text-[#25725b41]">
                  {todo.title}
                </h2>
                <p>{`${todo.completed}`}</p>
                <button
                  onClick={() => {
                    removeTodos(todo.id);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
      <div className="col-span-1 border border-1 border-black">
        <h2 className="font-bold text-xl">Todos</h2>
        <div>
          {todos &&
            todos?.map((todo) => (
              <div className="ms-3" key={todo.id}>
                <h2 className="font-bold text-lg text-[#25725b41]">
                  {todo.title}
                </h2>
                <p>{`${todo.completed}`}</p>
                <button
                  onClick={() => {
                    removeTodos(todo.id);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;

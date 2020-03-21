import React, { useReducer, useState } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [
          ...state.todos,
          {
            text: action.payload,
            paryority: action.paryority,
            compleated: false
          }
        ],
        todoCount: state.todoCount + 1
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          action.idx === idx ? { ...t, compleated: !t.compleated } : t
        ),
        todoCount: state.todoCount
      };
    case "delete-todo":
      state.todos.splice(action.idx, 1);
      return {
        todos: state.todos,
        todoCount: state.todoCount - 1
      };

    default:
      return state;
  }
};
export const ToDo = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0
  });
  const [payload, setPayload] = useState("");
  const [paryority, setParyority] = useState("low");
  const postIt = e => {
    e.preventDefault();
    dispatch({
      type: "add-todo",
      paryority: paryority,
      payload
    });
    setPayload("");
    setParyority("low");
  };
  return (
    <div className="form-group">
      <h1>To Do</h1>
      <h3>Count: {todoCount}</h3>
      <form onSubmit={postIt}>
        <input
          type="text"
          id="toDo"
          value={payload}
          onChange={e => setPayload(e.target.value)}
          placeholder="what should you do?"
        />
        <select
          className="form-control"
          type="select"
          name="paryourity"
          id="paryourity"
          onChange={e => setParyority(e.target.value)}
        >
          <option value="chose value" disabled selected>
            chose Pariorety?
          </option>
          <option value="low">low</option>
          <option value="mediume">midume</option>
          <option value="high">high</option>
        </select>
        <button onClick={postIt}>Add to do</button>
      </form>
      <ul>
        <pre>{JSON.stringify(todos, null, 2)} </pre>
        {todos.map((t, idx) => (
          <li
            key={t.text}
            onClick={() => dispatch({ type: "toggle-todo", idx })}
            style={{
              textDecoration: t.compleated ? "line-through" : ""
            }}
          >
            <span onClick={() => dispatch({ type: "delete-todo", idx })}>
              x
            </span>{" "}
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

import React from "react";
import css from "./TodoList.module.css"

const TodoList = ({ todos, onDeleteTodo }) => (
    <ul className={css.TodoList}>
        {todos.map(({id, text}) => (
        <li key={id} className={css.TodoList__item}>
                <p>{text}</p>
                <button onClick={() => onDeleteTodo(id)} className={css.TodoList__btn}>Delete</button>
        </li>
        ))}
    </ul>
);
export default TodoList;
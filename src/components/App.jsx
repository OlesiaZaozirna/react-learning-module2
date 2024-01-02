import React, {Component} from 'react'
import Counter from "./Counter/Counter";
import css from './App.module.css'
import Dropdown from "./Dropdown/Dropdown";
import ColorPicker from "./ColorPicker/ColorPicker";
import TodoList from "./TodoList/TodoList"

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2496F3' },

  { label: 'grey', color: '#607D88' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },

  { label: 'violet', color: '#ee82ee' },
  { label: 'lightgreen', color: '#82eeba' },
  { label: 'orange', color: '#d6670d' },
];

class App extends Component{

  state = {
    todos: [
      { id: 'id-1', text: 'Learn React', completed: true },
      { id: 'id-2', text: 'Learn React Router', completed: false },
      { id: 'id-3', text: 'Learn Redux', completed: false },
      { id: 'id-4', text: 'Make big project on React with Redux', completed: false },
    ],
  };



  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo=>todo.id !==todoId),
    }))
  }

  render() {
    const { todos } = this.state;

    const totalTodosCount = todos.length;

    const completedTodosCount = todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);

    
    return (
      <div className={css.container}>
        <h2>Practise module 2 lesson 1</h2>
        <div className={css.wrapper}>
          <Counter initialValue={10} />
          <Dropdown />
          <ColorPicker options={colorPickerOptions} />
          <div className={css.TodoList_wrapper}>
          <div className={css.TodoList__text}>
            <span>Count of Todo Item: {totalTodosCount} </span>
            <span>Done: {completedTodosCount} </span>
            <span>Made: </span>
          </div>
            <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
            </div>
        </div>
      </div>
    );
  }
};

export default App
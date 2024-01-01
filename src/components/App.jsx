import Counter from "./Counter/Counter";
import css from './App.module.css'
import Dropdown from "./Dropdown/Dropdown";

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

const App = () => {
  return (
    <div className={css.container}>
      <h2>Practise module 2 lesson 1</h2>
      <div className={css.wrapper}>
        <Counter initialValue={10} />
        <Dropdown/>
        </div>
    </div>
  );
};

export default App
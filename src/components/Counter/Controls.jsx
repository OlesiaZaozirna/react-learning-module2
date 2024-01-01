import React from "react";
import css from './Counter.module.css'

const Controls = ({ onIncrement, onDecrement }) => (
    <div className={css.Counter__controls}>
        <button type="button" onClick={onIncrement} className={css.Counter__btn }>Increase by 1</button>
        <button type="button" onClick={onDecrement} className={css.Counter__btn }>Decrease by 1</button>
    </div>
);

export default Controls;
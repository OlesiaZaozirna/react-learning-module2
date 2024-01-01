import React from "react";
import css from "./Counter.module.css"

const Value = ({ span_value }) => (
    <span className={css.Counter__value}>{span_value }</span>
)
export default Value;
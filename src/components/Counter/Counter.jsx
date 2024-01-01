import React from "react";
import Controls from "./Controls";
import Value from "./CounterValue";
import css from './Counter.module.css'

class Counter extends React.Component {

    static defaultProprs = {
        initialValue:0,
    }
    static propTypes = {
        ///
    };

    state = {
        value: this.props.initialValue,
    }


    handleIncrement = () => {
        this.setState((prevState) => {
            return {
                value:prevState.value+1,
            }
        })
    }
        handleDecrement = () => {
            this.setState((prevState) => {
            return {
                value:prevState.value-1,
            }
        })
    }

    render() {
        return (
            <div className={css.Counter}>
        
                <Value span_value={this.state.value} className={css.Counter__value} />
                {/* <span className="Counter__value">{this.state.value}</span>*/}

                <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>

       {/* <div className="Counter__controls">
            <button type="button" onClick={this.handleIncrement}>Increase by 1</button>
            <button type="button" onClick={this.handleDecrement}>Decrease by 1</button>
        </div>*/}
    </div>
        )
    }
}

export default Counter;

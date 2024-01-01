import React, {Component} from "react";
import css from "./Dropdown.module.css"

class Dropdown extends Component {

    state = {
        visible: false,
    };

    toggle = () => {
        this.setState (prevState=> ({
            visible: !prevState.visible,
        }))
    }

    render() {
        return (
            <div className={css.Dropdown}>
                <button type="button" className={css.Dropdown__toggle} onClick={this.toggle}>Toggle</button>
                {this.state.visible ? 'Hide' : 'Show'}
                {this.state.visible && (<div className={css.Dropdown__menu}>Dropdown menu</div>)}
        </div>
        )
}
}

export default Dropdown;


// class Dropdown extends Component {
//     state = {
//         visible: false,
//     };

//     toggle = () => {
//         this.setState(prevState => ({
//             visible: !prevState.visible,
//         }))
//     };


//     show = () => {
//         this.setState({ visible: true });
//     };

//     hide = () => {
//         this.setState({ visible: false });
//     };


//     render() {
//         return (
//             <div className={css.Dropdown}>
//                 <button type='button' className={css.Dropdown__toggle} onClick={this.show}>
//                     Show
//                 </button>

//                 <button type='button' className={css.Dropdown__toggle} onClick={this.hide}>
//                     Hide
//                 </button>

//                 {this.state.visible && (<div className={css.Dropdown__menu}>Dropdown menu</div>)}

                
//             </div>
//         )
//     }
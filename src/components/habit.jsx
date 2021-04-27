import React, { Component } from 'react';

{/* 
    Habit 이라는 습관 컴포넌트는 자체적으로 가지고 있는 state는 없고,
    외부에서 props로 전달받은 데이터를 보여주기만 하는 컴포넌트이다.
    따라서, 클릭시 발생하게 되면 내부적으로 데이터를 처리하기 보다는
    주어진 콜백함수들을 단순히 호출만해주는 컴포넌트로 구현한다.

    ==> 심플하고 단순한 컴포넌트로 구현하기 위함
*/}

{/*Props로 전달받은 habit인자로 콜백함수 호출 */}
class Habit extends Component {
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit)
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit)
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit)
    };

    render() {
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                {/*Props로 Habits에서 데이터를 받아와 표기하도록 함 */}
                <span className="habit-name">{name}</span> 
                <span className="habit-count">{count}</span>
                {/*fortawesome의 plus 이미지 가져오기*/}
                <button 
                    className="habit-button habit-increase" 
                    onClick={this.handleIncrement}
                >
                    <i className="fas fa-plus-square"></i>
                </button>
                {/*fortawesome의 minus 이미지 가져오기*/}
                <button 
                    className="habit-button habit-decrease" 
                    onClick={this.handleDecrement}
                >
                    <i className="fas fa-minus-square"></i>
                </button>
                {/*fortawesome의 trash 이미지 가져오기*/}
                <button 
                    className="habit-button habit-delete"
                    onClick={this.handleDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;
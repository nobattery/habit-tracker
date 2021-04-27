import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

{
  /*App -> Habits -> Habit 컴포넌트로 데이터를 전달하도록 한다.*/
}
class Habits extends Component {
  handleIncrement = (habit) => {
    {
      /* app.jsx->render->onIncrement*/
    }
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <div className="habits">
          <HabitAddForm onAdd={this.handleAdd} />
          <ul>
            {this.props.habits.map((habit) => (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
              />
            ))}
          </ul>
          <button className="habits-reset" onClick={this.props.onReset}>
            Reset All
          </button>
        </div>
      </>
    );
  }
}

export default Habits;

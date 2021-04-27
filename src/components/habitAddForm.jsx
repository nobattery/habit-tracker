import React, { PureComponent } from "react";
import reactDom from "react-dom";

{
  /*Ref를 이용하여 form에 임의의 name 입력시 새로운 habit생성 */
}
{
  /*PureComponent : 최상위 데이터가 변하지 않으면 re-rendering을 하지 않는다. 
    AddForm의 경우 rerender필요가 없기 때문에 pureComponent로 변경*/
}
class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault(); //자동 새로고침 방지
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    //this.inputRef.current.value = '';
    this.formRef.current.reset();
  };
  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;

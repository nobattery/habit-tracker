import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

{
  /*navBar에서도 상태 변경을 위해서 가장 상위 컴포넌트에서 state 선언 */
}
class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    {
      /*Spread Operator : habits배열 안의 아이템들을 새로운 배열로 복사 */
    }
    /* 단순 count plus 코드. id 구별까지 추가해주기 위해 주석처리
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    */
    //id 비교 하는 이유 : 해당하는 컴포넌트만 업데이트 시키기 위함.
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        //item의 id와 habit의 id가 같을 경우
        return { ...habit, count: habit.count + 1 }; //habit의 값을 모두 가져오되, count는 기존 count + 1
      }
      return item; //id가 다를경우 기존 item return
    });

    {
      /*새로운 배열을 생성했기 때문에 setState에는 새로운 state오브젝트를 만들어야 한다. */
    }
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    /*단순 count minus 코드. id 구별까지 추가해주기 위해 주석처리
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    */
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        //item의 id와 habit의 id가 같을 경우
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count }; //hatbit의 값을 모두 가져오되, count는 기존 count - 1
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    {
      /*특정한 곳을 제외하고 or 포함해서 만들 수 있는 배열의 API filter를 이용하여
    전달받은 habit을 배열에 삭제하도록 함.
    this.state.habits에서 아이템을 전달받아 함수인자로 받은 habit의 id가
    동일하지 않은 경우 삭제 함*/
    }
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    {
      /*habits배열을 복사해오고, id 는 중복 방지를 위해서 Date.now() 이용*/
    }
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    {
      /*ResetBtn onClick -> 각 habit들의 count가 0으로 리셋*/
    }
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        //habit의 count가 0이 아닐때만 habit의 count를 0으로 만들어 업데이트해주고
        return { ...habit, count: 0 };
      }
      return habit; //그 외에는 기존의 habit을 return
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        {/*Navbar : 활성화된 habit의 개수를 보여줌*/}
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;

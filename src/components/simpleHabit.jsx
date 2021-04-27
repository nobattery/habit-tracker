import React, { useCallback, useReducer, useRef, useState } from "react";

import React from "react";

{
  /* SimpleHabit : ReactHook 예제. 동작 확인하려면 index.js에서 App대신 SimpleHabit 적어주기.*/
}
const SimpleHabit = () => {
  //useState선언방식. state와 state를 업데이트 할 수 있는 함수를 받아올 수 있다.
  const [count, setCount] = useState(0); //초기값 0
  const sapnRef = useRef(); //createRef와 다르게 한 번만 만들고 메모리에 저장, 재사용한다.

  //useCallback : 반복 호출되어도 동일한 콜백함수를 전달하도록 함.
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  return (
    <li className="habit">
      <span ref={sapnRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

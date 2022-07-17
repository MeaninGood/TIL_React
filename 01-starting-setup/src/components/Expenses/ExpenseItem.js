import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // title을 직접 바꿔주는 것이 아니라, (title = 처럼 등호 사용 x )
  // useState를 호출해서 어떤 값을 관리하겠다고 react에 선언해줘야 함
  // 그래서 const(상수)로 관리
  // useState가 반환하는 배열에서 가장 최신의 상태를 불러옴

  // 첫 번째 : 관리되고 있는 값. props.title
  // 나중에 새로운 title을 설정하기 위해 호출할 수 있는 console.log(함수)
  const [title, setTitle] = useState(props.title);
  // 클릭 시 하나만 찍힘

  // let title = props.title;

  const clickHandler = () => {
    // 어떤 값에 새로운 값을 할당하는 것이 아님
    // 내가 호출한 함수는 state를 업데이트하는 함수
    // useState로 상태를 초기화했던 곳에서 다시 실행됨
    // setTitle을 통해 title을 업데이트하고 싶다고 react에게 말하고
    // 다시 재평가하는 과정.
    setTitle('Updated!');
    // title = 'Updated!';

    // 새로운 값이 아닌 기존의 title이 찍힘
    // state를 업데이트하는 함수를 호출했을 때 바로 값을 바꾸는 대신
    // state의 업데이트를 예약함.
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* 첫 번쨰 요소 사용 */}
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

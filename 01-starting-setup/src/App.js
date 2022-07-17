import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// 1. 정적 할당
// const App = () => {
// const expenses = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

// 2. 동적 할당
// const App = () => {
// expense가 추가될 때마다 작동
// const addExpenseHandler = (expense) => {
// console.log('IN App.js');
// console.log(expense);

// 1. 동적1
// 기존의 배열 요소를 가져와서 새 배열의 나머지 부분에
// 기존 요소와 함께 추가하기 위해 스프레드
// 이 상태의 스냅샷에 의존해 업데이트한다면 특별한 함수 폼을 사용해야 함
// 적절한 방법이 아님
// setExpenses([expense, ...expenses]);

// 2. 동적2
// 상태 업데이트 함수에 매개변수로 함수가 전달
// 그 함수는 자동으로 최신 상태의 스냅샷을 받게 됨
// 리액트에 의해 자동으로 이전 expenses를 얻고,(prevExpenses)
// expense를 추가하는 새 배열 + 이전 expenses를 반환
// 동일한 상태의 이전 스냅샷을 기반으로 하는 경우에
// 상태를 업데이트 할 수 있는 좋은 방법
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      console.log(expense.title);
      console.log(expense);
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

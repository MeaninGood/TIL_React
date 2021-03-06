import React, { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  // 초기값, 바뀔 값                             // 초기값
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    // console.log('Expenses.js');
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
    // true, false 반환하는 filter 메소드
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          // selected 속성 주기(초기값으로 -> filter 컴포넌트 확인)
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* 정적 할당 */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amounts}
          date={props.items[3].date}
        /> */}

        {/* 동적 할당 모든 아이템은 고유 식별자가 있어야 함 */}
        {/* {props.items.map((expense) => ( */}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
        {/* id가 없을 때!! 장려되는 방법은 아님 */}
        {/* {props.items.map((expense, index) => (
          <ExpenseItem
          key={expense.index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
        ))} */}
      </Card>
    </div>
  );
};

export default Expenses;

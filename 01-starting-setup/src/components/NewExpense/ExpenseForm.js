import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  // document.getElementById('').addEventListener('click', (event) => {});

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    // 입력할 때마다 출력됨(입력하는 중에 계속)
    // console.log(event.target.value);
    // 1.
    setEnteredTitle(event.target.value);
    // 2.
    // setUserInput({
    //   // 스프레드 후
    //   ...userInput,
    //   // 오버라이딩
    //   enteredTitle: event.target.value,
    //   // 이 경우 우리는 이전의 state를 따라 상태를 업데이트함
    //   // 다른 값을 복사해서 잃어버리지 않도록 하는 방법
    //   // 기존 값을 복사하기 위해 기존 state의 스냅샷에 의존하고,
    //   // 오버라이드함 - 이전 state에 의존
    //   // 상태를 업데이트하기 위한 함수로 전달할 것
    // });
    // 3.
    // 이전 state의 스냅샷을 얻어서 새로운 state의 스냅샷 반환
    // 많은 경우에 위와 함께 두 방법 다 괜찮으나,
    // 동시에 수많은 상태 업데이트를 계획한다면
    // 오래되었거나 잘못된 상태 스냅샷에 의존할 수 있음(위의 방식은)
    // 그래서 아래의 접근 방법 사용
    // 아래는 이 안에 있는 함수에서 이 상태 스탭샷이 가장 최신의 것으로 인지,
    // 항상 계획된 상태 업데이트를 염두에 두고 있다는 것을 보장
    // 좀 더 안전한 방법임
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // 1.
    setEnteredAmount(event.target.value);

    // 2.
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // 3.
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    // 1.
    setEnteredDate(event.target.value);
    // 2.
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // 3.
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };
  // 페이지가 다시 로드됨 - 자바스크립트와 수동으로 결합해서 무언갈 해야 함
  const submitHandler = (event) => {
    // 서버에 요청이 보내지지 않기 때문에 페이지는 다시 로드 x, 로드된 페이지에 머물러 있음
    event.preventDefault(); // 내장된 자바스크립트 동작. 기본 요청이 보내지는 것을 막을 수 있음

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      // new date를 설정해서 내장된 날짜로 새로운 날짜를 생성
      // 그리고 해당 날짜 문자열을 분석해서 날짜 객체로 변환한 enteredDate 반환
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  };

  return (
    // 여기서 실행해 줌 (제출 이벤트 함수)
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* 버튼에 onClick리스너를 추가할 수 있지만 최선의 방법이 아님
        왜냐하면 브라우저에 내장된 기본 동작과 웹페이지에 내장된 폼이 있기 때문 */}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

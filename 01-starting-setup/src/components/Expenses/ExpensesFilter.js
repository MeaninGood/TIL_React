import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdonwChangHandler = (event) => {
    // console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* Expenses에서 selected속성을 value로 씀,
        이제 dropdown의 초기 값이 2022년으로 나옴 */}
        <select value={props.selected} onChange={dropdonwChangHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

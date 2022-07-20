// 루트 리듀서 - counter + todos

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 리듀서를 rootreducer로 합치기, 내장함수 사용
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

// 루트 리듀서가 만들어졌으면, 스토어 만들 차례
// src 디렉토리의 index.js에서 해줌

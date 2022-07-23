import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// serviceWorker는 현재 WebVitals로 대체됨
// import * as serviseWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화

// ReactDOM.render 이제 지원 안 함.
// 이렇게 써줘야 함
ReactDOM.render(
  <React.StrictMode>
    {/* Provider로 store를 넣어서 App을 감싸면 우리가 렌더링하는 그 어떤
    컴포넌트던지 리덕스 스토어에 접근할 수 있게 됨 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

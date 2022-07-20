# 1. 리덕스 사용

- 프로젝트 생성
  
  ```bash
  npx create-react-app learn-redux
  ```

- 해당 디렉토리에서 redux 라이브러리 설치
  
  ```bash
  cd learn-redux
  npm add redux
  ```

- 리액트 프로젝트에 리덕스 적용 - react-redux 라이브러리 설치
  
  ```bash
  npm add react-redux
  ```





# 2. 리덕스 모듈

### 리덕스 모듈

- 액션 타입

- 액션 생성함수

- 리듀서

가 모두 들어있는 js파일



### 루트 리듀서

- 두가지의 리덕스 모듈을 만들면 리듀서도 두개

- 한 프로젝트에 여러 개의 리듀서가 있을 때는 이를 한 리듀서로 합쳐서 사용

- 합쳐진 리듀서 => **루트 리듀서**

- 합치는 작업은 redux 내장 `combineReducers`라는 함수를 사용



### 바뀐 구조

1. src/index.js

```js
// 초기 구조


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// 바뀐 구조
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

```

2. seviceWorker
   
   - 브라우저가 백그라운드에서 실행하는 웹페이지와는 별개로 작동하는 스크립트
   
   - 오프라인 문제가 생겼을 경우 해결하기 위해 등장
   
   - 개발자에게 오프라인 환경을 통제할 수 있는 권한 부여 -> 오프라인 환경에서 캐시와의 상호작용, 백그라운드 동기화, 푸시 알림 등의 기능을 가능하게 함
   
   - 사용자가 요청해야 동작하고 할 일을 마칠 때까지 꺼지지 않음
   
   - 웹페이지 밖에서 동작 -> 웹브라우저의 열고 닫힘과 무관하게 동작
   
   - 웹 개발자는 이러한 서비스워커의 lifecycle을 제어할 수 없음
   
   - 웹페이지 밖에서 동작하기 때문에 DOM요소에 접근할 수 없다.
   
   -> `reportWebVitals`로 대체된 듯

// todos 모듈

// 액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// 액션 생성함수 선언
let nextID = 1; // todo 데이터에서 사용할 고유 id
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextID++, // 새 항목을 추가하고, nextId 값에 1 더해줌
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// 초기 상태 선언 - 꼭 객체타입일 필요는 없다
// 배열이어도 되고, 원시타입(숫자, 문자, 불리언)이어도 됨
const initialState = [
  /* 다음과 같이 구성된 객체를 이 배열 안에 넣을 것임
   {
     id: 1,
     text: '예시',
     done: false
   }
   */
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      // concat : 여러 범위 및 문자열의 텍스트를 결합, 리스트를 늘림, 배열+배열
      return state.concat(action.todo);

    case TOGGLE_TODO:
      // map : array 안에 있는 모든 요소에 대해 콜백함수 실행하고 return 값을 요소로 하는
      // 새로운 리스트를 만듦
      // 파이썬 map(int, input()) => 모든 요소를 int로 만들어 리스트 반환
      return state.map(
        (todo) =>
          todo.id === action.id // id가 일치하면
            ? { ...todo, done: !todo.done } // done 값을 반전시키고
            : todo // 아니라면 그대로 둠
      );
    default:
      return state;
  }
}

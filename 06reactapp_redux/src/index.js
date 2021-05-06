import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Redux, { createStore } from 'redux';


// Redux
// Store: 數據倉庫，保存數據的地方
// State: state是一個對象，數據倉庫裡的所有數據都放到一個state裡
// Action: 一個動作，觸發數據改變的方法
// Dispatch: 將Action轉成方法
// Reducer: 是一個函數，通過獲取Action，改變數據，生成一個新state，從而改變頁面 (自己寫的函數，可以自己命名)

// Reducer==reducerFn 用於通過action操作state，再回傳新的state
// Reducer有兩個作用: 1. 初始化數據 2.通過Action操作數據
const reducerFn = (state = { num: 0 }, action) => { // state={num:0}這是預設值
console.log('action: ',action)
  switch (action.type) {
    case 'add':
      state['num']++
      break
    case 'sub':
      state['num']--
      break
  }
  return {...state} // 回傳一個新的state // 解構完再放到一個新的物件，可以理解為創造一個新的物件再將state的資料丟進去
}

// 創建數據倉庫
const store = createStore(reducerFn)
console.log('store',store)
// 可以看到透過createStore實例化後的store是一個對象，這個對象下面有一個dispatch方法

let addFn = () => {
  // 通過store的dispatch方法進行修改數據，dispatch觸發reducerFn，dispatch的形參會丟進reducerFn的第二個形參(action)，在通過action處理數據
  store.dispatch({type:'add',content:{id:1,msg:'hello world'}})
  console.log('觸發addFn',store.getState())
}
let subFn = () => {
  // 通過store的dispatch方法進行修改數據
  store.dispatch({type:'sub'})
  console.log('觸發subFn',store.getState())
}

let Counter = (props) => {
  console.log('store.getState()',store.getState())
  let getState=store.getState() // 拿到store裡的state
  return (
    <div>
      <h1>計數數量:{getState['num']}</h1>
      {/*<h1>計數數量:{store.getState()['num']}</h1>*/}
      <button onClick={addFn}>計數++</button>
      <button onClick={subFn}>計數--</button>
    </div>
  )
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);

// store.subscribe() 用來監聽數據變化 一旦數據發生變化 就調用裡面的匿名函數
store.subscribe(()=>{
  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  );
})

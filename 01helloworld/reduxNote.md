### 創建數據倉庫

- createStore 放入 reducer 作為形參

```
const store = createStore(reducer)
```

---

### 創建 Reducer 函數

#### Reducer 有兩個作用:

- 1.第一個形參初始化數據
- 2.第二個形參 Action 用來操作數據

```
const reducerFn = (state = { num: 0 }, action) => { //state={num:0}這是預設值
switch (action.type) {
  case 'add':
    state['num']++
    break
}
return {...state} // 回傳一個新的state // 解構完再放到一個新物件，可以理解為創造一個新的物件再將state的資料丟進去
}
```

---

### 使用 dispatch 觸發 actione 改變數據

- dispatch 是被 createStore 實例化的物件(store)中內建的方法
- dispatch 中的參數會傳到 reducer 的第二個參數(action)，再透過 reducer 的第二個參數(action)修改數據

```
let addFn = () => {
  store.dispatch({type:'add',content:{id:1,msg:'hello world'}})
}
```

### 透過 getState()獲取數據

- getState 方法是被 createStore 實例化後的物件擁有的方法

```
let getState=store.getState()
getState['num']
// 或是
store.getState()['num']
```

### 監聽數據變化 重新渲染視圖

- subscribe 方法是被 createStore 實例化後的物件擁有的方法
-  subscribe 方法用於監聽數據變化 重新渲染視圖 一旦數據發生變化 就調用裡面的匿名函數

```
store.subscribe(()=>{
  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  );
})
```

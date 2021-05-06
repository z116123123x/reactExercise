### `初始化數據倉庫`

1. 宣告 state (數據)

```
const myState = {
  num: 0
}
```

2. 宣告 action (選擇修改數據的方法)

```
const myAction = {
  type: 'add'
}
```

3. 宣告 reducer 函數，形參傳入 state 和 action

```
const reducer = (state = myState, action) => {
  switch (action['type']) {
    case 'add':
      state['num']++
      break;
    default:
      break;
  }
  return { ...state }
}
```

4. 呼叫 createStore 函數，形參傳入 reducer 函數，完成初始化數據倉庫

```
const store = createStore(reducer)
```

---

### `創建將 state 映射到 props 的函數 & 讓store和組件進行關聯`

1. 宣告一個將倉庫的 state 透過 connect 映射到 props 的函數

```
const mapStateToProps = (state) => {
  return {
    val: state.num
  }
}
```

2. 宣告一個將倉庫修改 state 的方法透過 connect 映射到 props 的函數

```
const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: () => { dispatch(myAction) }
  }
}
```

3. 創建一個組件

```
class Counter extends React.Component {
  render() {
    let val = this.props.val
    let onAddClick = this.props.onAddClick
    return (
      <div>
        <h3>計數的數量: {val}</h3>
        <button onClick={onAddClick}>val++</button>
      </div>
    )
  }
}
```

4. 透過 connect 將映射函數和組件關聯起來，使映射函數里的傳回值可以傳入組件的 props。  
   調用方法: connect(映射函數)(組件)  
   connect(映射函數)會產生一個函數，再以組件呼叫這個函數，就可以實例化出一個 state 和組件的 props 有關連的新組件

```
const App = connect(mapStateToProps, mapDispatchToProps)(Counter)
```

5. 利用Provider 組件自動將 store 裡的 state 和組件進行關聯

```
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

---

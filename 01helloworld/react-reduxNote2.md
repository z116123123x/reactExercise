## `react-redux如何觸發修改數據的方法`

### `1. 前提要件`

1. 有一個 JSX 組件

```
class Counter extends React.Component {
  render() {
    return (
      <div>
        <h3>計數的數量: {this.props.val}</h3>
        <button onClick={this.props.onAddClick}>val++</button>
      </div>
    )
  }
}
```

2. 有映射 state 到 props 的函數

```
const mapStateToProps = (state) => {
  return {
    val: state.num
  }
}
```

3. 有映射修改 state 的方法到 props 的函數

```
const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: () => { dispatch(type: 'add') },
  }
}
```

4. 產生一個 JSX 跟 2.3 兩個函數產生關連的新組件，產生關連的意思就是，映射函數返回的 state 會回傳到組件的 props  
   這裡的 App 組件就是跟映射函數產生關連的 Counter 組件

```
const App = connect(mapStateToProps, mapDispatchToProps)(Counter)
```

---

### `2. onClick觸發修改state方法的流程`

1. user 點擊畫面上的 val++ button 觸發 App 組件的 this.props.onAddClick
2. 因為 App 組件就是跟映射函數產生關連的 Counter 組件，所以就會觸發映射函數，映射函數回傳修改 state 的函數 dispatch

```
onAddClick: () => { dispatch(type: 'add') } // 這裡dispatch的形參就是reducer的action
```

3. 呼叫 dispatch 時會呼叫 reducer 並傳入 action 作為形參修改 state

- reducer:  
  一載入就會調用一次 reducer，一開始只要初始化 state，被點擊或其他動作才觸發 action 修改 state

```
const reducer = (state = myState, action) => { // action就是dispatch的形參
  if (action.type.indexOf('redux') === -1) {
    state = actionFnObj[action.type](state, action)
    // 這裡將state修改為調用函數的回傳值
    // 被調用的函數是actionFnObj[action.type]
    return { ...state } // 被點擊或其他動作才觸發action
  } else {
    return { ...state } // 一開始只要初始化state
  }
}
```

- 被 reducer 調用修改數據的函數

```
const actionFnObj = {
  add(state, action) {
    state.num++ // 修改state
    return state // 回傳state
  }
}
```

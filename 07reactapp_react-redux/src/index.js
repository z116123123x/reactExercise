import React from 'react';
import ReactDOM from 'react-dom';
import Redux, { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const myState = {
  num: 0
}

const myAction = {
  type: 'add'
}

const actionFnObj = {
  add(state, action) {
    state.num++ // 修改state
    return state // 回傳state
  },
  addNum(state, action) {
    state.num += action.num
    return state
  },
  add7(state, action) {
    state.num += action.num
    return state
  },
  sub3(state, action) {
    state.num -= action.num
    return state
  },
}

const reducer = (state = myState, action) => { // action就是dispatch的形參
  // console.log(state);
  // console.log(action);
  // 一載入就會調用一次reducer，但是此時並沒有觸發action，只有要初始化state
  if (action.type.indexOf('redux') === -1) { // 初始化的action.type包含redux字串，此時不能直接調用，要先初始化state
    // 以onAddClick5為例 action={type: "addNum", num: 5} 就會變成
    // actionFnObj['addNum']({num: 0}, {type: "addNum", num: 5})
    state = actionFnObj[action.type](state, action) 
    // 這裡將state修改為調用函數的回傳值
    // 被調用的函數是actionFnObj[action.type]
    return { ...state }
  } else {
    return { ...state } // 初始化state
  }
}

const store = createStore(reducer)

// mapStateToProps是將state映射到props的函數
const mapStateToProps = (state) => {
  return {
    val: state.num
  }
}

// mapDispatchToProps是將修改state的方法(dispatch)映射到props，這裡默認會傳入store裡的dispatch方法
const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: () => { dispatch(myAction) },// 這裡dispatch的形參就是reducer的action
    onAddClick5: () => { dispatch({ type: 'addNum', num: 5 }) },
    onAddClick7: () => { dispatch({ type: 'add7', num: 7 }) },
    onAddClickSub3: () => { dispatch({ type: 'sub3', num: 3 }) },
  }
}

class Counter extends React.Component {
  render() {
    console.log(this.props)
    let val = this.props.val
    return (
      <div>
        <h3>計數的數量: {val}</h3>
        <button onClick={this.props.onAddClick}>val++</button>
        <button onClick={this.props.onAddClick5}>val+5</button>
        <button onClick={this.props.onAddClick7}>val+7</button>
        <button onClick={this.props.onAddClickSub3}>val-3</button>
      </div>
    )
  }
}

// 1.將state映射到props的函數mapStateToProps
// 2.將修改state的方法(dispatch)映射到props的函數mapDispatchToProps
// 透過connect(mapStateToProps,mapDispatchToProps)形成新函數
// 將組件Counter作為形參傳入調用
// 創建新的組件=>App
const App = connect(mapStateToProps, mapDispatchToProps)(Counter)

ReactDOM.render(
  // Provider組件: 自動將store裡的state 和組件進行關聯
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


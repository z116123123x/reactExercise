import { createStore } from 'redux';
import state from './state' // 引入state
import methods from './methods' // 引入修改state的方法
// 初始化state，創建reducer函數

const myState = state
const actionFnObj = methods

const reducer = (state = myState, action) => { // action就是dispatch的形參
    // console.log(state);
    // console.log(action);
    // 一載入就會調用一次reducer，但是此時並沒有觸發action，只需要初始化state
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

export default store

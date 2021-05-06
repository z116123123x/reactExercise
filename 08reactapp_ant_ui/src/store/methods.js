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
    // setQuiz 函數會在 Quiz.js 檔案裡被dispatch({type: 'setQuiz',content: list}) 調用
    // 調用 dispatch 後，會調用 index.js 中引入的 store，再去 reducer.js 調用 reducer 將 dispatch的形參放進 reducer 的 action
    setQuiz(state, action) {
        state.quizList = action.content
        return state
    }
}

export default actionFnObj
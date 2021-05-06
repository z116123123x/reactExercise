import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';

// mapStateToProps是將state映射到props的函數
const mapStateToProps = (state) => {
    return {
        val: state.num
    }
}

// mapStateToProps是將修改state的方法(dispatch)映射到props，這裡默認會傳入store裡的dispatch方法
const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: () => { dispatch({ type: 'add' }) },// 這裡dispatch的形參就是reducer的action
        onAddClick5: () => { dispatch({ type: 'addNum', num: 5 }) },
        onAddClick7: () => { dispatch({ type: 'add7', num: 7 }) },
        onAddClickSub3: () => { dispatch({ type: 'sub3', num: 3 }) },
    }
}

class Counter extends React.Component {
    render() {
        // console.log('view/app.js', this.props)
        return (
            <div>
                <Button onClick={this.goQuiz}>隨機答題</Button>
                <Button>闖關答題</Button>
                <Button>抽獎答題</Button>
            </div>
        )
    }
    goQuiz = () => {
        console.log(this.props)
        this.props.history.push('/Quiz')
    }
}

// 1.將state映射到props的函數mapStateToProps
// 2.將修改state的方法(dispatch)映射到props的函數mapDispatchToProps
// 透過connect(mapStateToProps,mapDispatchToProps)形成新函數
// 將組件Counter作為形參傳入調用
// 創建新的組件=>App
const App = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default App

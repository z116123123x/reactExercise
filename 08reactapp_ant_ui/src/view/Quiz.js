import React from 'react';
import { connect } from 'react-redux'; // 將映射函數跟組件結合產生新組件
import { Button } from 'antd-mobile';
import ajaxMethods from '../store/ajaxMethods' // 引入 ajax 方法 ajax api 撈出資料
import loading from '../assets/img/loading.gif'

// mapStateToProps是將state映射到props的函數
// 之後會用react-redux的connect方法把state傳進組件裡
// 範例: const Quiz = connect(mapStateToProps, mapDispatchToProps)(QuizComp)
const mapStateToProps = (state) => {
    return { ...state }
}

// mapStateToProps是將修改state的方法(dispatch)映射到props，這裡默認會傳入store裡的dispatch方法
// 之後會用react-redux的connect方法把修改state的方法傳進組件裡
// 再利用 dispatch 調用 reducer 並將 dispatch 的形參傳進 reducer 的 action形參
// 範例: const Quiz = connect(mapStateToProps, mapDispatchToProps)(QuizComp)
const mapDispatchToProps = (dispatch) => {
    return {
        // 這裡dispatch的形參就是reducer的action
        getAjaxQuiz: async () => {
            let list = await ajaxMethods.ajaxQuiz()
            dispatch({
                type: 'setQuiz',
                content: list // 將content:list 傳到methods.js的setQuiz函數的第二個action形參
            })
            // 調用 dispatch 後，會調用 index.js 中引入的 store，再去 reducer.js 調用 reducer 將 dispatch的形參放進 reducer 的 action
            console.log('getAjaxQuiz(): ', list)
        }
    }
}

class QuizComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentQuiz: 0,
            quizArr: []
        }
    }

    UNSAFE_componentWillMount() {
        this.props.getAjaxQuiz() // 從redux的store取回來的
    }

    // Cannot read property 'quiz' of undefined
    // 因為一開始數據沒有加載近來，所以quiz會是undefined
    render() {
        console.log('this.props: ', this.props)
        console.log('this.state: ', this.state)
        let quizArr = this.props.quizList
        let currentNum = this.state.currentQuiz
        if (quizArr.length > 0) {
            let options = JSON.parse(quizArr[currentNum].options)
            return (
                <div className="quizPage">
                    <h2>
                        {currentNum + 1}: {quizArr[currentNum].quiz}
                    </h2>
                    <div className='options'>
                        {
                            options.map((item, i) => {
                                return (
                                    <div key={i} className='optionItem' onClick={this.answerEvent}>
                                        {i + 1}: {item}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <img alt='loading' style={{ width: "100%" }} src={loading} />
                </div>
            )
        }

    }
    goQuiz = () => {
        console.log(this.props)
        this.props.history.push('/Quiz')
    }
    answerEvent = () => {
        this.setState({
            // ++放在前面是先+1再賦值，++放在後面是先賦值再+1
            currentQuiz: ++this.state.currentQuiz
        })
    }
}

// 1.將state映射到props的函數mapStateToProps
// 2.將修改state的方法(dispatch)映射到props的函數mapDispatchToProps
// 透過connect(mapStateToProps,mapDispatchToProps)形成新函數
// 將組件Counter作為形參傳入調用
// 創建新的組件=>Quiz
const Quiz = connect(mapStateToProps, mapDispatchToProps)(QuizComp)

export default Quiz

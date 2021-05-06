import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './myStyle.css';
import App from './App'; // 組件對象
import * as serviceWorker from './serviceWorker';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // 狀態(數據)->視圖
    // 構造函數初始化數據，將需要的數據初始化到state中
    this.state = {
      time:new Date().toLocaleTimeString()
    };
  }
  render() {
    // this.state.time=new Date().toLocaleTimeString()
    return (
      <div>
        <h2>當前時間: {this.state.time}</h2>
      </div>
    )
  }
  // 生命週期函數，組件渲染完成時的函數
  componentDidMount() {
    setInterval(() => {
      // this.state.time=new Date().toLocaleTimeString() 錯誤的方式
      // 切勿直接修改state數據，需要使用setState
      this.setState(function(state, props) {
        // console.log(state, props);
        return {
        time:new Date().toLocaleTimeString()
        };
      });
    }, 1000);
  }
}

ReactDOM.render(
  <Clock />,
  document.querySelector('#root')
)

// 重複調用ReactDOM.render()只可以重複調用類組件裡的render() 渲染函數
// 不能重複調用類組件裡的constructor() 初始化函數
// setInterval(() => {
//   ReactDOM.render(
//     <Clock />,
//     document.querySelector('#root')
//   )
// }, 1000);
//不建議此種寫法
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './myStyle.css';
import App from './App'; // 組件對象
import * as serviceWorker from './serviceWorker';

// 函數式組件
function FnChildComponent(props) {
  let title = <h2>我是title變數</h2>
  console.log('FnChildComponent props: ',props);
  let weather = props.weather
  let isgo = weather == '下雨' ? '下雨不出門' : '沒下雨可以出門'
  return (
    <div>
      <h2>函數式組件</h2>
      {title}
      <div>
        是否出門?
        <span>{isgo}</span>
      </div>
    </div>
  )
}

//類組件
class ClassChildComponent extends React.Component {
  render() {
    console.log('ClassChildComponent: ',this)
    return (
      <div>
        {/* 父層組件把 weather 屬性 傳遞到 this.props.weather
        再由 weather={this.props.weather} 傳遞到這個組件的子組件 FnChildComponent 
        再由 FnChildComponent 參數調用 */}
        <FnChildComponent weather={this.props.weather} />
        <h2>我是類組件</h2>
        <h2>我的名字是{this.props.name}</h2>
      </div>
    )
  }
}

// ReactDOM.render(
//   <FnChildComponent weather='晴天' />,
//   document.querySelector('#root')
// )

ReactDOM.render(
  <ClassChildComponent weather='下雨' name='andy' />,
  document.querySelector('#root')
)
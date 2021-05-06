import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './myStyle.css';
import App from './App'; // 組件對象
import * as serviceWorker from './serviceWorker';

let exampleStyle={
  // 屬性可以用小駝峰命名法或是字串
  background:'skyblue',
  borderBottom:'5px solid red',
  'text-align':'center'
}
let exampleClassName='bgAqua'
// .join(' ')將陣列轉成字串並以空白隔開
let classNameArr=['bgCoral','border0005px'].join(' ')
let ele=(
  <div>
    {/* 在JSX中標籤裡的style屬性裡必須是對象 */}
    <h2 style={exampleStyle}>在JSX中標籤裡的style屬性裡必須是對象</h2>
    <h2 style={{background:'pink',borderBottom:'5px solid green'}}>在JSX中標籤裡的style屬性裡必須是對象</h2>

    {/* 不可以同時存在多個 className 屬性 */}
    {/* <h2 className={'borderf005px '} className={exampleClassName}>不可以同時使用多個 className</h2> 錯誤示範 */}

    {/* 同時使用多個 className */}
    <h2 className={'borderf005px '+exampleClassName}>同時使用多個 className</h2>
    <h2 className={classNameArr}>同時使用多個 className</h2>
  </div>
)
ReactDOM.render(ele,document.querySelector('#root'))
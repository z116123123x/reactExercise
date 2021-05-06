import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // 組件對象
import * as serviceWorker from './serviceWorker';

// <React.StrictMode> 嚴格模式
// <App /> 是JSX寫法，可以將上面import的App，當成JS的對象
// 讓 <App /> 變成JSX組件對象
// ReactDOM.render(<App />,document.getElementById('root'));
// 翻譯: 將 <App /> 這個對象渲染到 document.getElementById('root') 

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   ,
//   document.getElementById('root')
// );

// let h1 = <h1>hello world</h1> // JSX元素對象
// // JSX元素對象、JSX組件對象，只可以有一個根節點
// ReactDOM.render(
//   h1,
//   document.getElementById('root')
// );

//實現頁面顯示時刻
// function clock() {
//   let time = new Date().toLocaleTimeString()
//   // {}裡面可以放變數
//   // ()是為了看清楚 ele 是從哪裡到哪裡
//   let ele =
//     (
//       <div>
//         <h1>現在的時間是{time}</h1>
//       </div>
//     )

//   let root = document.querySelector('#root')
//   ReactDOM.render(ele, root)
// }
// setInterval(() => {
//   clock()
// }, 1000);

// //react函數式組件
// function Clock(props) { // 函數名稱首字母大寫 傳遞參數 props 可以自行命名變數
//   return (
//     <div>
//       <h1>現在時間是{props.data.toLocaleTimeString()}</h1>
//       <h2>這是函數式組件開發</h2>
//     </div>
//   )
// }
// function run() {
//   ReactDOM.render(
//     <Clock data={new Date()} />, // data={new Date()} 就是將 new Date() 傳到 Clock 函數中的 props.data
//     // 可以寫成<Clock></Clock> 或是<Clock /> 沒有結束標籤的話最後要有斜槓
//     document.querySelector('#root')
//   )
// }
// // setInterval(() => {
// //   run()
// // }, 1000); // 等於下面
// setInterval(run, 1000); // 這邊run不能加括號

//如何在{}裡面寫表達式 和三元判斷式
let time = new Date().toLocaleTimeString()
let str = '當前時間是 : '
let man = '發燒'
let man2 = '沒有發燒'
let ele2 = (
  <div>
    <div>不需要隔離</div>
    <div>但是出門要戴口罩</div>
  </div>
)
let BgRedClassAA = 'BgRedClass'
let dogImg = 'https://images.chinatimes.com/newsphoto/2020-07-04/900/20200704002959.jpg'
let ele = (
  <div>
    <h2>1+1=? ANS: {1 + 1}</h2>
    <h2>{str + time}</h2>
    <h2>今天的體溫 : {man}</h2>
    {/* 可以直接在{}裡面寫html */}
    <h2>是否需要隔離? {man === '發燒' ? <button>需要隔離</button> : '不需要隔離'}</h2>
    {/* 可以直接在{}裡面寫JSX元素變數 */}
    <h2>今天的體溫 : {man2}</h2>
    {/* 在 JSX 裡面加上 class 需要先在上方引入 css 再 let 變數 = ' css 裡的 class 名稱'
    再在 JSX 的標籤裡寫上 className = { 變數 } 
    雖然也可以寫成 class = { 變數 } 但是 class 在JS裡面是關鍵字 所以盡量不要使用 class */}
    <h2 className={BgRedClassAA}>是否需要隔離? {man2 === '發燒' ? <button>需要隔離</button> : ele2}</h2>
    {/* 也可以寫成 className='css中的class'  */}
    <img className='borderBlue4px' src={dogImg} />
  </div>
)
ReactDOM.render(ele, document.querySelector('#root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); //如果你有內容需要緩存 他會幫你緩存

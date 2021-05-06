import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './myStyle.css';
import App from './App'; // 組件對象
import * as serviceWorker from './serviceWorker';
import './tab.css';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      c1: 'content active',
      c2: 'content',
      that: this
    };
    // 將 this 綁定回 class Tab 否則會是 undefined
    // this.clickEvent=this.clickEvent.bind(this)
  }

  // https://zh-hant.reactjs.org/docs/handling-events.html 使用 React element 處理事件
  
  // clickEvent(e) {
  //   console.log(this);// this 會指向 onClick 變成 undefined 需要在 constructor 綁定 this 將 this 指向 class Tab
  //   console.log(e);
  //   console.log(e.target.dataset.index);
  //   let index = e.target.dataset.index
  //   if (index == 1) {
  //     this.setState({
  //       c1: 'content active',
  //       c2: 'content'
  //     })
  //   } else {
  //     this.setState({
  //       c1: 'content',
  //       c2: 'content active'
  //     })
  //   }
  // }

  // 箭頭函數默認把 this 指向 class Tab
  clickEvent=(e)=>{
    console.log(this.state.that); // 可以看到 class Tab 中的 this 指向誰
    let index = e.target.dataset.index
    if (index == 1) {
      this.setState({
        c1: 'content active',
        c2: 'content'
      })
    } else {
      this.setState({
        c1: 'content',
        c2: 'content active'
      })
    }
  }

  render() {
    return (
      <div>
        <button data-index='1' onClick={this.clickEvent}>內容一</button>
        <button data-index='2' onClick={this.clickEvent}>內容二</button>
        <div className={this.state.c1}>
          <h2>內容一</h2>
        </div>
        <div className={this.state.c2}>
          <h2>內容二</h2>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Tab />,
  document.querySelector('#root')
)
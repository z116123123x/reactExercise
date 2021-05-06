import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './props.css';

// React 事件詳解

class ParentComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2> React 事件詳解</h2>
        <form action='http://google.com'>
          <div>
            <button onClick={this.parentEvent}>parentEvent</button>
          </div>
        </form>
        <br />
        {/* 使用箭頭函式傳遞多個參數 */}
        <button onClick={(e) => { this.setMultParam('I am first param.', e) }}>setMultParam with arrow func</button>
        <br />
        <br />
        {/* 使用普通匿名函式需要再函數後面.bind(this)，將this綁定到class ParentComponent
        bind() 方法，會建立一個新函式。該函式被呼叫時，會將 this 關鍵字設為給定的參數，並在呼叫時，帶有提供之前，給定順序的參數。 */}
        <button onClick={function (e) { this.setMultParam('I am first param.', e) }.bind(this)}>setMultParam with anonymous func</button>
      </div>
    )
  }

  // React返回的事件對象是React代理的原生的事件對象，
  parentEvent = (e) => {
    console.log(e)
    e.preventDefault()
  }
  setMultParam = (param1, e) => {
    console.log(param1)
    console.log(e)
    e.preventDefault()
  }
}

ReactDOM.render(
  <ParentComponent />,
  document.querySelector('#root')
)
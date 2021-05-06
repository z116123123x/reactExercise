import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './props.css';

// React 條件渲染
// 第一種方法: 通過條件運算返回要渲染的JSX對象
// 第二種方法: 通過條件運算得出JSX對象，在將JSX對象渲染到模板中

function NotLogedIn(props) {
  return (
    <h2>您已登入</h2>
  )
}

function LogedIn(props) {
  return (
    <h2>請先登入</h2>
  )
}

class ParentComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogedIn: 0
    }
  }
  // 第一種方法: 通過條件運算返回要渲染的JSX對象
  // render() {
  //   if (this.state.isLogedIn) {
  //     return (<NotLogedIn />)
  //   } else {
  //     return (<LogedIn />)
  //   }
  // }
  // 第二種方法: 通過條件運算得出JSX對象，在將JSX對象渲染到模板中
  render() {
    let ele = null
    if (this.state.isLogedIn) {
      ele = <NotLogedIn />
    } else {
      ele = <LogedIn />
    }
    return (
      <div>
        <h2>我是標題</h2>
        {ele}
        <h2>這是三元運算符的操作</h2>
        {this.state.isLogedIn ? <NotLogedIn /> : <LogedIn />}
        <h2>我是footer</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <ParentComponent />,
  document.querySelector('#root')
)
import React from 'react';
import ReactDOM from 'react-dom';

// react插槽
// 組件中寫入內容，這些內容可以被識別和控制
// 原理: 組件中寫入的html，可以傳入到props

class ParentCom extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ChildCom>
        {/* ChildCom組件裡的裡的JSX 會傳到ChildCom 的props */}
        <div data-position='header'>I'm header</div>
        <div data-position='body'>I'm body</div>
        <div data-position='footer'>I'm footer</div>
      </ChildCom>
    )
  }
}

class ChildCom extends React.Component {
  constructor(props) {
    super(props)
    console.log(props) // 接收到父組件裡傳遞過來的JSX物件
  }
  render() {
    // 透過父組件傳遞過來的props 判斷該插入哪個位置
    let header, body, footer
    this.props.children.forEach(element => {
      console.log(element.props['data-position'])
      switch (element.props['data-position']) {
        case 'header':
          header = element
          break
        case 'body':
          body = element
          break
        case 'footer':
          footer = element
          break
      }
    })
    return (
      // 直接將父組件裡傳遞過來的JSX物件 放置進來
      // <div>
      //   {this.props.children}
      // </div>
      <div>
        {header}
        <div>內容內容內容內容內容內容內容內容內容內容內容內容內容內容</div>
        <div>內容內容內容內容內容內容內容內容內容內容內容內容內容內容</div>
        <div>內容內容內容內容內容內容內容內容內容內容內容內容內容內容</div>
        {body}
        <div>內容內容內容內容內容內容內容內容內容內容內容內容內容內容</div>
        <div>內容內容內容內容內容內容內容內容內容內容內容內容內容內容</div>
        <div>內容內容內容內容內容內容內容內容內容內容內容內容內容內容</div>
        <div>內容內容內容內容內容內容內容內容內容內容內容內容內容內容</div>
        <div>內容內容內容內容內容內容內容內容內容內容內容內容內容內容</div>
        <div>內容內容內容內容內容內容內容內容內容內容內容內容內容內容</div>
        <div>內容內容內容內容內容內容內容內容內容內容內容內容內容內容</div>
        {footer}
      </div>
    )
  }
}

ReactDOM.render(
  <ParentCom></ParentCom>,
  document.getElementById('root')
);



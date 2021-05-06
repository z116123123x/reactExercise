import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './props.css';

// 數據父傳子 EXAMPLE
// 在父元素中使用state去控制子元素的props，從而達到父元素數據傳遞給子元素
// https://ithelp.ithome.com.tw/articles/10210221
// state是讓元件控制自己的狀態
// props是讓外部對元件自己進行配置


// 父元素
class ParentComponent extends React.Component {
  constructor(props) {
    super(props)

    // 父元素的數據 (this.state)
    this.state = {
      isActive: true
    }
    this.changeShow=this.changeShow.bind(this) // 將 this 綁定到 class ParentComponent
  }

  render() {
    return (
      <div>
        {/* onClick觸發 changeShow方法 */}
        <button onClick={this.changeShow}>控制子元素顯示</button>
        {/* 將 state.isActive數據 傳到子元素 ChildComponent的 isActive屬性 */}
        <ChildComponent isActive={this.state.isActive} />
      </div>
    )
  }

  changeShow() {
    // this.setState 改變state數據 重新渲染視圖
    // 呼叫 setState()。這會觸發一次額外的 render
    // https://zh-hant.reactjs.org/docs/react-component.html
    this.setState({
      isActive: !this.state.isActive
    })
  }
}

// 子元素
class ChildComponent extends React.Component {
  constructor(props) {
    // 接收父元素的 state數據 傳進props
    super(props)
  }

  render() {
    let classStr = null
    if (this.props.isActive) {
      classStr = ' active'
    } else {
      classStr = ''
    }

    return (
      <div className={'content' + classStr}>
        <h2>我是子元素</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <ParentComponent />,
  document.getElementById('root')
);

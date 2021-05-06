import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// 新版本生命週期https://zh-hant.reactjs.org/docs/react-component.html


class ComLife extends Component {
  constructor(props) {
    super(props) // 調用繼承 Component的構造函數
    this.state = {
      msg: 'hello world'
    }
    console.log('constructor構造函數');
  }
  componentWillMount() {
    console.log('componentWillMount 組件將要渲染 AJAX 添加動畫的類')
  }
  componentDidMount() {
    console.log('componentDidMount 組件渲染完畢 添加動畫')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps 組件將要接收props 查看接收的props數據')
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate 組件接收新的state或props 判斷是否更新 返回布爾值')
    if (this.state.msg === 'hello world') {
      console.log('進行更新')
      return 1
    } else {
      console.log('不更新')
      return 0
    }
  }
  componentWillUpdate() {
    console.log('componentWillUpdate 組件將要更新')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate 組件更新完畢')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount 組件移除')
  }

  render() {
    console.log('render 渲染函數')
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <button onClick={this.changeMsg}>組件更新</button>
      </div>
    )
  }
  changeMsg = () => {
    this.setState({
      msg: 'msg is changed'
    })
  }
}

class ParentCom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }
  render() {
    if (this.state.isShow) {
      return (
        <div>
          <button onClick={this.removeCom}>移除ComLife</button>
          <ComLife />
        </div>
      )
    } else {
      return (
        <div>ComLife已移除</div>
      )
    }
  }
  removeCom = () => {
    this.setState({
      isShow: false
    })
  }
}

ReactDOM.render(
  <ParentCom />,
  document.getElementById('root')
)
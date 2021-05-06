import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// 新版本生命週期https://zh-hant.reactjs.org/docs/react-component.html
// https://ithelp.ithome.com.tw/articles/10222857
// 而Ver.16.3所誕生的新的生命週期是:
// static getDerivedStateFromProps(props, state)
// shouldComponentUpdate(nextProps, nextState)
// render()
// getSnapshotBeforeUpdate()
// 渲染畫面
// componentDidUpdate(prevProps, prevState)

class ComLife extends Component {
  constructor(props) {
    super(props) // 調用繼承 Component的構造函數
    this.state = {
      msg: 'hello world'
    }
    console.log('constructor構造函數');
  }
  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps 組件將要渲染')
    console.log('getDerivedStateFromProps props: ',props)
    console.log('getDerivedStateFromProps state: ', state)
    return true
  }
  componentDidMount() {
    console.log('componentDidMount 組件渲染完畢')
  }
  shouldComponentUpdate() {
    console.log('進行判斷是否要更新')
    if (this.state.msg === 'hello world') {
      console.log('進行更新')
      return 1
    } else {
      console.log('不更新')
      return 0
    }
  }
  getSnapshotBeforeUpdate(props, state) {
    console.log('getSnapshotBeforeUpdate 組件將要更新')
    console.log('getSnapshotBeforeUpdate props: ',props)
    console.log('getSnapshotBeforeUpdate state: ', state)
    return true
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
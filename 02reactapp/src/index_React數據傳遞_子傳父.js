import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './props.css';

// React 數據傳遞: 子傳父
// 調用父元素的函數從而操作父元素的數據，實現數據從子元素傳到父元素

class ParentComponent extends React.Component{
  constructor(props){
    super(props)
    this.state={
      parentData:null
    }
  }
  render(){
    return(
      <div>
        <h2>子元素傳遞給父元素的數據: {this.state.parentData}</h2>
        <ChildComponent updateParentData={this.updateParentData}/>
      </div>
    )
  }
  // updateParentData方法會將 this.state.parentData修改為形參傳進來的值
  // 將此方法透過props傳遞給子元素，子元素就可以將子元素的數據作為形參調用此方法，修改父元素的state
  updateParentData=(childData)=>{
    this.setState({
      parentData:childData
    })
  }
}

class ChildComponent extends React.Component{
  constructor(props){
    super(props)
    this.state={
      childData:'this is from ChildComponent'
    }
  }
  render(){
    return(
      <div>
        <button onClick={this.sendDataToParent}>傳遞數據給父元素 數據: {this.state.childData}</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{this.props.updateParentData('使用箭頭函數直接調用props函數')}}>傳遞數據給父元素 數據: 使用箭頭函數直接調用props函數</button>
      </div>
    )
  }
  sendDataToParent=()=>{
    console.log(this.props)
    // 子元素傳遞數據給父元素，是透過調用父元素傳遞進來的方法修改父元素的state
    this.props.updateParentData(this.state.childData)
  }
}

ReactDOM.render(
  <ParentComponent />,
  document.querySelector('#root')
)
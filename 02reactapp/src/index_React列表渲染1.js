import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './props.css';

// React 列表渲染
// 將列表內容拼裝成數組放置到模板中
// 將數據拼裝成數組的JSX對象

// 陣列裡面也可以放JSX對象，JSX對象其實就是普通對象
let arr = [<li>aa</li>,<li>bb</li>,<li>cc</li>]
class ParentComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div>
        <ul>
          {arr}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <ParentComponent />,
  document.querySelector('#root')
)
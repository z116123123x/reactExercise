import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './props.css';

// React 列表渲染
// 將列表內容拼裝成數組放置到模板中，將數據拼裝成數組的JSX對象
// 使用數組的map方法，對每一項數據按照JSX的形式進行加工，最終得到一個每一項都是JSX對象的數組，再將數組渲染到模板中
// key值需要放到每一項中

// function ListItem(props) {
//   return (
//     <li>
//       <h3>{props.index}____{props.data.title}</h3>
//       <p>{props.data.content}</p>
//     </li>
//   )
// }

class ListItem2 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li onClick={(e) => {
        this.clickEvent(
          this.props.index,
          this.props.data.title,
          this.props.data.content,
          e
        )
      }}>
        <h3>{this.props.index}____{this.props.data.title}</h3>
        <p>{this.props.data.content}</p>
      </li>
    )
  }
  clickEvent(index, title, content, e) {
    alert(index + title + content + e)
  }
}

class ParentComponent extends React.Component {
  constructor(props) {
    super(props)
    // 陣列裡面也可以放JSX對象，JSX對象其實就是普通對象
    this.state = {
      list: [
        {
          title: '第一節 React事件',
          content: '事件內容'
        },
        {
          title: '第二節 React數據傳遞',
          content: '數據傳遞內容'
        },
        {
          title: '第三節 條件渲染',
          content: '條件渲染內容'
        }
      ]
    }
  }
  render() {
    // 使用for迴圈，將列表內容拼裝成數組放置到模板中，將數據拼裝成數組的JSX對象
    // let listArr = []
    // for (let i = 0; i < this.state.list.length; i++) {
    //   let item = (
    //     <li>
    //       <h3>{this.state.list[i]['title']}</h3>
    //       <p>{this.state.list[i]['content']}</p>
    //     </li>
    //   )
    //   listArr.push(item)

    // 使用 array.map()
    // 使用數組的map方法，對每一項數據按照JSX的形式進行加工，最終得到一個每一項都是JSX對象的數組，再將數組渲染到模板中
    // let listArr = this.state.list.map((item, index) => (
    //   <li key={index}>
    //     <h3>{item['title']}</h3>
    //     <p>{item['content']}</p>
    //   </li>
    // ))

    // let listArr = this.state.list.map((item, index) => (
    //   <ListItem key={index} data={item} index={index} />
    // ))

    let listArr = this.state.list.map((item, index) => (
      <ListItem2 key={index} data={item} index={index} />
    ))

    return (
      <div>
        <ul>
          {listArr}
        </ul>

        <h2>不用組件完成列表</h2>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index} onClick={(e) => { this.noComClickFn(index, item.title, item.content, e) }}>
                <h3>{index}____{item.title}</h3>
                <p>{item.content}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  noComClickFn = (index, title, content, e) => {
    alert('不用組件完成列表' + index + title + content + e)
  }
}

ReactDOM.render(
  <ParentComponent />,
  document.querySelector('#root')
)
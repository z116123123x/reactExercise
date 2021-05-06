import React, { Component } from 'react';
import axios from 'axios';
import NewsCom from './component/newsCom'

function map(props) {
  return(
    <div>
      <h3></h3>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newData: null
    }
  }
  async componentWillMount() {
    let res = await axios.get('http://localhost:8080/api/newsdata')
    // 錯誤訊息 無法跨域請求 需要設置 Access-Control-Allow-Origin
    // Access to XMLHttpRequest at 'http://localhost:8080/api/newsdata' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    let data = res.data.ncov_nation_data
    data = JSON.parse(data)
    console.log(data);
  }
  render(
  ) {
    return (
      <div>
        <h2>首頁</h2>
        <NewsCom />
      </div>
    )
  }
}

export default App;

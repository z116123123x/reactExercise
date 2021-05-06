import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

// ReactRouter01

function User(props) {
  console.log(props);
  return (
    <Router basename='/user'>
      <Link to='/Home'>前台首頁</Link>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Link to='/Product'>前台產品業</Link>
      {/*
        <Link to='/Home'>UserHome</Link>
        <Route path='/Home' exact component={UserHome}></Route>
        不能導回到自己本身 會造成無限迴圈
      */}
      {/*
          exact 是嚴格匹配模式 不加上exact 會匹配到所有Route 從而顯示所有component
          https://blog.csdn.net/mapbar_front/article/details/72832057
        */}
      <Route path='/Home' exact component={UserHome}></Route>
      <Route path='/Product' exact component={UserProduct}></Route>
    </Router>
  );
}
function UserHome() {
  return (
    <div>
      這裡是前台首頁
      <br />
    </div>
  );
}
function UserProduct() {
  return (
    <div>
      這裡是前台產品頁
      <br />
    </div>
  );
}

function Admin(props) {
  console.log(props)
  return (
    <Router basename='/admin'>
      <div>
      <h3>歡迎回來 編號: {props['match']['params']['uid']} 姓名: {props['match']['params']['uname']}</h3>
        <Link to='/Home'>後台首頁</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Link to='/Product'>後台產品頁</Link>
      </div>
      <br />
      <Route path='/Home' exact component={AdminHome}></Route>
      <Route path='/Product' exact component={AdminProduct}></Route>
    </Router>
  )
}

function AdminHome() {
  return (
    <div>
      這是後台首頁
      <br />
    </div>
  );
}

function AdminProduct() {
  return (
    <div>
      這是後台產品頁
      <br />
    </div>
  );
}


function App() {
  let myobj = {
    pathname: 'user', // 跳轉的路徑
    search: '?uid=001', // get 請求參數
    hash: 'index', // 設置的HASH值
    state: { // 傳入組件的數據
      uid: '001',
      uname: 'an'
    }
  }
  return (
    <Router>
      <div>
        {/*<Link to='/user'>前台</Link>*/}
        <Link to={myobj}>前台</Link>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to='/admin/001/Bob'>後台</Link>
      </div>
      <Route path='/user' exact component={User}></Route>
      <Route path='/admin/:uid/:uname' exact component={Admin}></Route>
    </Router>
  );
}

export default App;

// 正確寫法 Link跟Route要分開寫
// <Router>
//   <Link to='/user'>前台</Link>
//   <Link to='/admin'>後台</Link>
//   <Route path='/user' exact component={User}></Route>
//   <Route path='/admin' exact component={Admin}></Route>
// </Router>

// 錯誤寫法 Link跟Route寫在一起會造成匹配到 <Link to='/admin'>後台</Link>
// <Router>
//   <Link to='/user'>前台</Link>
//   <Route path='/user' exact component={User}></Route>
//   <Link to='/admin'>後台</Link>
//   <Route path='/admin' exact component={Admin}></Route>
// </Router>
import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom'

let UserLogin = () => (<div>前台登入頁<Link to='/user/loginVerify'>登入前台</Link></div>)
let UserIndex = () => (<div>成功登入前台首頁</div>)
let UserIndexFail = () => (<div>登入前台首頁失敗</div>)
let AdminLogin = () => (<div>後台登入頁<Link to='/admin'>登入後台</Link></div>)
let AdminIndex = () => (<div>成功登入後台首頁</div>)
let Landing = (props) => {
  console.log(props)
  return (
    <div>
      {/*<Link to='/user/login' replace>前台</Link> replace就不會記到history(歷史紀錄)裡面 (無法上一頁)*/ }
      <Link to='/user/login'>前台</Link>
      <Link to='/admin/login'>後台</Link>
      <Link to='/useJsGotoOtherPage'>利用JS前往其他頁面</Link>
    </div>
  )
}

let UserLoginInfo = (props) => {
  console.log(props.location.state.loginState)
  if (props.location.state.loginState == 'success') {
    return (
      <div>
        {/* 
          Redirect重定向 (轉址)
          props.location.state.loginState == 'success' 重定向to='/user'
        */}
        <Redirect to='/user'></Redirect>
      </div>
    )
  } else {
    return (
      <div>
        <Redirect to='/user/loginfail'></Redirect>
      </div>
    )
  }
}

let UserLoginVerify = () => {
  let pathObj = {
    pathname: '/user/loginInfo',
    state: {
      loginState: 'success'
    }
  }
  return (
    <div>
      <h4>登入前台驗證</h4>
      <Link to={pathObj}>登入前台驗證</Link>
    </div>
  )
}

class UseJsGotoOtherPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <button onClick={this.gotoPage}>利用JS前往其他頁面</button>
      </div>
    )
  }
  gotoPage = () => {
    console.log(this.props)
    // this.props.history.replace('/', { msg: '從UseJsGotoOtherPage跳轉到首頁' }) replace就不會記到history(歷史紀錄)裡面 (無法上一頁)
    // this.props.history.go(1)下一頁
    // this.props.history.go(-1)上一頁
    this.props.history.push('/', { msg: '從UseJsGotoOtherPage跳轉到首頁' })
  }
}

function App() {
  return (
    <div>
      <h4>不在Router裡的標籤將顯示在所有路由</h4>
      <Router>
        <h4>Router裡不是 Route標籤的標籤將顯示在所有路由</h4>
        <Switch>{/*<Switch> 匹配到第一個路徑就不往下匹配*/}
          <Route path='/useJsGotoOtherPage' component={UseJsGotoOtherPage}></Route>
          <Route path='/user/loginInfo' component={UserLoginInfo}></Route>
          <Route path='/user/loginFail' component={UserIndexFail}></Route>
          <Route path='/user/loginVerify' component={UserLoginVerify}></Route>
          <Route path='/user/login' component={UserLogin}></Route>
          <Route path='/admin/login' component={AdminLogin}></Route>
          <Route path='/user' component={UserIndex}></Route>
          <Route path='/admin' component={AdminIndex}></Route>
          <Route path='/' component={Landing}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

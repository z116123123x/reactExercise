import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'


let LoginInfo = () => {
  return (
    <Redirect to='/admin'></Redirect>
  )
}
let Index = () => <div>首頁</div>
let Form = () => <div>表單驗證<Link to='/loginInfo'>登入</Link></div>
let Login = () => <div>登入頁</div>
let admin = () => <div>admin頁面</div>
function App() {
  return (
    <div>
      <Router>
        <Route path='/' exact component={Index}></Route>
        <Route path='/form' exact component={Form}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/loginInfo' exact component={LoginInfo}></Route>
        <Route path='/admin' exact component={admin}></Route>
      </Router>
    </div>
  );
}

export default App;
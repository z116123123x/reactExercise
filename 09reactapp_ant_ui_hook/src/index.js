import React from 'react';
import ReactDOM from 'react-dom';
// import { Button } from 'antd-mobile';
// import axios from 'axios';
// import Redux, { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import store from './store/reducer'
import App from './view/App'
import Quiz from './view/Quiz'
import './assets/css/style.css'

ReactDOM.render(
  // Provider組件: 自動將store裡的state 和組件進行關聯
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={App}></Route>
      <Route path='/Quiz' component={Quiz}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// class App extends React.Component {
//   async componentWillMount() {
//     let page=1
//     let httpUrl=`http://localhost:8080/api/quiz?page=${page}`
//     let res=await axios.get(httpUrl)
//     console.log(res.data)
//   }
//   render() {
//     return(
//       <Button>Start</Button>
//     )
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


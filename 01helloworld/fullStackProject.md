## 後端

1. 先從網路上下載 JSON 檔(或自己寫)，將他匯入到 mysql，可以使用 Navicat 將 JSON 檔匯入到 mysql，或是自己手動輸入 sql 指令，放進 mysql

2. 後端連線到資料庫

   1. 安裝 mysql

      ```
      yarn add mysql
      ```

   2. 創建函數讓後端可以輸入 sql 指令撈資料

      1. 創建一個 js 檔，ex: sql.js
      2. 程式碼:

      ```
      // 檔案名稱: sql.js
      // mysql套件相關資訊
      // https://www.npmjs.com/package/mysql

      // 引入mysql套件
      const mysql = require('mysql')

      // 配置連接
      const connection = {
          host: 'localhost',
          post: '3306',
          user: 'root',
          password: 'root',
          database: 'test'
      }

      // 實例化連接對象
      let con = mysql.createConnection(connection)

      // 連接
      con.connect(err => {
          if (err) {
              console.log('數據庫連接失敗');
          } else {
              console.log('數據庫連接成功');
          }
      })

      // 創建queryFn方法
      // 調用queryFn時，return一個Promise對象，這個Promise對象會調用con.query，成功的話返回撈出的資料resolve(result)，失敗的話返回錯誤訊息reject(error)
      let queryFn = (sqlStr, arr) => {
          return new Promise((resolve, reject) => {
              con.query(sqlStr, arr, (error, result) => {
                  if (error) {
                      reject(error)
                  } else {
                      resolve(result)
                  }
              })
          })
      }

      // 輸出queryFn方法，讓後端調用的時候可以將sql指令放入參數，撈出資料
      module.exports = queryFn
      ```

3. 後端設定: 撈出資料做出 api 讓前端 ajax

   1. 安裝 express

      ```
      yarn add express
      ```

   2. 程式碼範例:

      ```
          const express = require('express') // 引入express框架
          const sqlQuery=require('./sql') // 引入可以執行sql命令的方法
          const app = express() // 實例化express

          app.get('/api/quiz',async (req, res) => {
              // 解決ajax跨域問題(CORS)
              // res.append()
              res.append('Access-Control-Allow-Origin','*')
              res.append('Access-Control-Content-Type','*')
              let page=req.query.page?req.query.page:2
              let strSql=`select * from quiz limit ${page-1},2`
              // 透過引入的sqlQuery執行sql命令
              let result = await sqlQuery(strSql)
              console.log(req.query);
              res.json(Array.from(result))
          })

          app.listen(8080, () => {})

      ```

## 前端

1.  創建 redux 的 store 集中管理狀態

    1. 資料夾結構

       ```
       ├─store
       │      methods.js
       │      reducer.js
       │      state.js
       ```

    2.初始化資料(state)

        ```
        ├─store
        │      state.js

        const myState = {
            quizList:[]
        }

        export default myState
        ```

    3. 創建修改 state 的方法

       ```
       ├─store
       │      methods.js

       const actionFnObj = {
           // setQuiz 函數會在 Quiz.js 檔案裡被dispatch({type: 'setQuiz',content: list}) 調用
           // 調用 dispatch 後，會調用 index.js 中引入的 store，再去 reducer.js 調用 reducer 將 dispatch的形參放進 reducer 的 action
           setQuiz(state, action) {
               state.quizList = action.content
               return state
           }
       }

       export default actionFnObj
       ```

    4. 創建 reducer 並以 reducer 作為形參實例化 store

       ```
       ├─store
       │      reducer.js

       import { createStore } from 'redux';
       import state from './state' // 引入state
       import methods from './methods' // 引入修改state的方法
       // 初始化state，創建reducer函數

       const myState = state
       const actionFnObj = methods

       const reducer = (state = myState, action) => { // action就是dispatch的形參
           // console.log(state);
           // console.log(action);
           // 一載入就會調用一次reducer，但是此時並沒有觸發action，只需要初始化state
           if (action.type.indexOf('redux') === -1) { // 初始化的action.type包含redux字串，此時不能直接調用，要先初始化state
               // 以onAddClick5為例 action={type: "addNum", num: 5} 就會變成
               // actionFnObj['addNum']({num: 0}, {type: "addNum", num: 5})
               state = actionFnObj[action.type](state, action)
               // 這裡將state修改為調用函數的回傳值
               // 被調用的函數是actionFnObj[action.type]
               return { ...state }
           } else {
               return { ...state } // 初始化state
           }
       }

       const store = createStore(reducer)

       export default store
       ```

2.  創建 ajax 方法，從後端 API 接資料

    1.  安裝 axios

        ```
        yarn add axios
        ```

    2.  再 store 資料夾下新增 ajaxMethods.js 檔案

        ```
        ├─store
        │      ajaxMethods.js
        │      methods.js
        │      reducer.js
        │      state.js
        ```

    3.  創建 ajax 方法並導出去

        ```
        import axios from 'axios';
        let host = 'http://localhost:8080'
        let ajaxMethods = {
            async ajaxQuiz() {
                let page = 1
                let httpUrl = `${host}/api/quiz?page=${page}`
                // 用 axios ajax 後端的 api 撈出 DB 裡的資料
                let res = await axios.get(httpUrl)
                // 返回撈出的資料
                return res.data
            }
        }
        export default ajaxMethods

        ```

3.  創建 view (視圖)
    1. 創建 view 資料夾，創建 Quiz.js 視圖
       ```
       └─view
               Quiz.js
       ```

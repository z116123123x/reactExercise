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
const express = require('express') // 引入express框架
const axios = require('axios')
const sqlQuery=require('./sql') // 引入可以執行sql命令的方法
const app = express() // 實例化express
// 資料來源: http://i.snssdk.com/ugc/hotboard_fe/hot_list/template/hot_list/forum_tab.html?activeWidget=1
app.get('/', (req, res) => {
    res.send('返回抗疫數據的api服務器')
})

app.get('/api/newsdata',async (req, res) => {
    let result=await axios.get('http://i.snssdk.com/forum/ncov_data/?activeWidget=1&data_type=%5B2%2C4%2C8%5D&src_type=map')
    // 解決ajax跨域問題(CORS)
    // res.append()
    res.append('Access-Control-Allow-Origin','*')
    res.append('Access-Control-Content-Type','*')
    let data=result.data
    res.json(data)
})

app.get('/api/newsdata2',async (req, res) => {
    let result=await axios.get('http://i.snssdk.com/api/feed/forum_flow/v1/?query_id=1656810113086509&tab_id=1656810113086525&category=forum_flow_subject&is_preview=0&stream_api_version=82&aid=13&offset=0&count=20')
    // 解決ajax跨域問題(CORS)
    // res.append()
    res.append('Access-Control-Allow-Origin','*')
    res.append('Access-Control-Content-Type','*')
    let data=result.data
    res.json(data)
})

app.get('/api/quiz',async (req, res) => {
    // 解決ajax跨域問題(CORS)
    // res.append()
    res.append('Access-Control-Allow-Origin','*')
    res.append('Access-Control-Content-Type','*')
    let page=req.query.page?req.query.page:2
    let strSql=`select * from quiz limit ${page-1},2`
    // 透過引入的sqlQuery執行sql命令
    let result = await sqlQuery(strSql)
    console.log('req.query: ',req.query);
    // console.log(result)
    // console.log(typeof(result))
    res.json(Array.from(result))
})

app.listen(8080, () => {
    // console.log('server start: ');
    // console.log('http://localhost:8080');
    // console.log('http://localhost:8080/api/newsdata');
    // console.log('http://localhost:8080/api/quiz');
})
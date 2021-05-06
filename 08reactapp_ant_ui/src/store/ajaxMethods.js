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
        // console.log(res.data)
    }
}
export default ajaxMethods
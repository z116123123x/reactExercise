import React, { Component } from 'react';
import axios from 'axios'

class NewsCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datalist: [],
            // 這裡如果寫null會報錯Cannot read property 'map' of null
            // 因為componentWillMount 裡的 setState還沒將 datalist變成陣列
            myStyle: {
                position: 'relative',
                left: '1em',
                fontSize: '5em',
            }
        }
    }
    async componentWillMount() {
        let res2 = await axios.get('http://localhost:8080/api/newsdata2')
        // 錯誤訊息 無法跨域請求 需要設置 Access-Control-Allow-Origin
        // Access to XMLHttpRequest at 'http://localhost:8080/api/newsdata' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
        let data2 = res2.data.data[0].content
        data2 = JSON.parse(data2)
        data2 = data2['sub_raw_datas']
        this.setState({ datalist: data2 })
        console.log(this.state['datalist']);
    }
    render() {
        return (
            <div>
                <h2 onClick={(e) => { this.myClick(e,5) }} style={this.state.myStyle}>新聞內容</h2>
                {
                    this.state.datalist.map((item, index) => {
                        if (item.raw_data.desc) {
                            return (
                                <li key={index}>{item.raw_data.desc}</li>
                            )
                        }

                    })
                }
            </div>
        )
    }
    myClick = (event,pram) => {
        console.log(event.persist()) // event.persist() 可以看到事件物件原本的屬性，否則會因為效能原因將屬性設為null
        console.log(event,pram)
        this.setState({
            myStyle: {
                position: 'relative',
                left: pram+'em',
                fontSize: '5em',
            }
        })
    }
}

export default NewsCom
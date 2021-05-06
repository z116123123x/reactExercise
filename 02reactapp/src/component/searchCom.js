import React, { Component } from 'react'

class SearchCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            result: null,
        }
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='請輸入查詢省份' onKeyDown={this.searchEvent} value={this.state.value} onChange={this.changeEvent} />
                <div>
                    <h2>查詢結果: </h2>
                    <div>
                        {this.state.result}
                    </div>
                </div>
            </div>
        )
    }
    searchEvent = (e) => {
        if (e.keyCode === 13) {
            if (this.props.provinceObj[e.target.value]) {
                this.setState({
                    result: (
                        <div>
                            <div>confirm: {this.props.provinceObj[e.target.value]['confirm']}</div>
                            <div>suspect: {this.props.provinceObj[e.target.value]['suspect']}</div>
                            <div>dead: {this.props.provinceObj[e.target.value]['dead']}</div>
                            <div>heal: {this.props.provinceObj[e.target.value]['heal']}</div>
                        </div>
                    )
                })
            } else {
                this.setState({
                    result: <h2>輸入錯誤，請重新輸入正確省份</h2>
                })
            }
        }

        // ninja！！　
        // e.keyCode === 13
        //     && (() => {
        //         this.props.provinceObj[e.target.value] ?
        //             console.log('省分', this.props.provinceObj[e.target.value])
        //             : console.log('省分不存在')
        //     })()
        // Expected an assignment or function call and instead saw an expression
        // 這裡期望得到的是 assignment 賦值 或是 function call 函數
    }
    changeEvent = (e) => {
        this.setState({
            value: e.target.value
        })
    }
}

export default SearchCom
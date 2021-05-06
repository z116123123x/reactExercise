### 創建項目

- 安裝 create-react-app

```
終端機指令
npm i -g create-react-app
```

- 透過 create-react-app 創建一個 01helloworld 專案 ( 專案名稱不能有大寫英文字母 )

```
終端機指令
create-react-app 01helloworld
```

- 創建成功時終端機會出現以下提示訊息

```
Success! Created 01helloworld at C:\Users\z1161\Desktop\reactExercise\01helloworld
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
```
- yarn start: 啟動react
- yarn eject: react為了代碼乾淨，會將專案內的package.json的某些配置隱藏，為了配置新的套件需要將package.json隱藏的內容顯示出來，可以使用yarn eject

---

### JSX 表達式

- 由 html 元素構成
- 中間如果需要插入變量要使用{}
- { } 中間可以使用表達式
- { } 中間的表達式可以使用 JSX 對象
- react 默認以 index.js 為首頁

---

### JSX_Style 樣式

- class、style 中，不可以存在多個 class、style 屬性

```
錯誤示範

<div className='aa' className={bb}></div>
```

- style 樣式中屬性使用小駝峰命名法或是字串

```
let exampleStyle={
    borderBottom:'5px #000 solid',
    'backgroundColor':'skyblue'
}
```

- 同時使用多個類 - 使用字符串

```
let ele = (
    <div>
        <h2 className={'aa ' + 'bb'}></h2>
    </div>
)
```

- 同時使用多個類 - 使用陣列

```
let classArr = [aa, bb].join(' ') // .join(' ') 將陣列轉換成字串並以空格分開

let ele = (
    <div>
        <h2 className={classArr}></h2>
    </div>
)
```

---

### React 組件

- 函數式組件

```
function FnChildComponent(props) {
  return (
    <div>
      <h2>函數式組件</h2>
    </div>
  )
}
```

- 類組件

```
class ClassChildComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>我是類組件</h2>
      </div>
    )
  }
}
```

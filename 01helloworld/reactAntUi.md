參考網址 [ant.design](https://mobile.ant.design/docs/react/introduce-cn)

---

### 使用 ant-ui

1. 先在終端機輸入指令

```
yarn eject
```

- yarn eject: react 為了代碼乾淨，會將專案內的 package.json 的某些配置隱藏，為了配置新的套件需要將 package.json 隱藏的內容顯示出來，可以使用 yarn eject

2. 安裝 babel-plugin-import

```
yarn add babel-plugin-import
```

3. 假如報錯怎麼辦?

   1. 可以看報錯訊息，如果是縣市缺少某些套件，可以用 yarn add 加回去
   2. 移除 node_modules 資料夾，用 yarn add 指令重新安裝一遍套件

4. 引入 AntUI 的 Button 樣式

```
import { Button } from 'antd-mobile'
<Button>這是AntUI的Button</Button>
```

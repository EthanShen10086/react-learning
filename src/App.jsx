import { useState } from "react";
import "./App.css";

import { MyButton } from "./components/my-button";
import { MyButton2 } from "./components/my-button2";
import { ReduceCounter } from "./components/reduce-counter";
import { DispatchPanel } from "./components/dispatch-panel";
import { Setting } from "./components/setting";
import { ThemeProvider } from "./components/theme-provider";
import { MyList } from "./components/my-list";
import { TimeContainer } from "./components/children-property";
import { TimeContainer2 } from "./components/TimeContainerUseRef";
import { TestRouter } from "./components/test-router";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const userList = [
  {
    id: "a",
    name: "a",
    value: "a",
  },
  {
    id: "b",
    name: "b",
    value: "b",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [isButton2, setButtonShow] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState("");
  const [userName, setUserName] = useState("tony");
  const [location, setLocation] = useState({
    lon: "110",
    lat: "22",
  });

  const userDOMList = userList.map((item, index) => {
    // 需要设置key
    return <li key={index}>{item.name}</li>;
  });

  const selectedItem = userList.find((item) => item.id === selectedItemId);

  const handleFormateUserName = () => {
    // 他这里的un的参数就是useState传入的参数
    // 并且通过userName变量进行表达
    // 他这里的setUserName就像是微信小程序的setData
    setUserName((un) => un + "stark");
  };

  const handleChangeLocation = () => {
    const newLocation = {
      lon: "111",
      lat: "22",
    };
    // setLocation(newLocation);
    setLocation((location) => {
      return {
        ...location,
        ...newLocation,
      };
    });
  };

  const handleChangeButton = () => {
    setButtonShow(!isButton2);
  };

  const handleChangeCount = () => {
    // 使用函数式更新来避免闭包陷阱：
    setCount((previousCount) => previousCount + 1);
  };

  const handleSetCurrentId = (currentItem) => {
    setSelectedItemId(currentItem.id);
  };

  return (
    <>
      {/* 这里是计时器 使用useReducer的例子 */}
      <ReduceCounter />
      {/* 这里是切换按钮的例子 */}
      <div className="m-App__content" onClick={handleChangeButton}>
        {isButton2 ? <MyButton2 /> : <MyButton />}
      </div>
      {/* 这里是展示select的例子 */}
      <select placeholder="select选择框">
        {userList.map((item, index) => (
          // 这里直接return了
          <option value={item.value} key={index}>
            {item.name}
          </option>
        ))}
      </select>
      {/* 这里是List 点击切换的例子 */}
      <>
        <div> 当前选中的是: {selectedItemId && selectedItem.id}</div>
        <MyList
          dataList={userList}
          setSelectItem={handleSetCurrentId}
          currentItemId={selectedItemId}
        />
      </>
      <TimeContainer />
      {/* 这里是点击按钮添加姓名的例子 */}
      <button onClick={handleFormateUserName}>{userName}</button>
      {/* 这里是展示list的例子 */}
      <ul> {userDOMList} </ul>
      {/* 这里是展示计数器的例子 */}
      <MyButton count={count} handleChangeCount={handleChangeCount} />
      {/* 必须被ThemeProvider包裹不然的话disptach不会被获取到 */}
      <ThemeProvider>
        <DispatchPanel></DispatchPanel>
        <Setting />
      </ThemeProvider>
      <TimeContainer2></TimeContainer2>
      <section className="test-router">
        <BrowserRouter>
          {/* 这里是跳转用的 你也可以在地址栏直接切换路由 */}
          <Link to="/test-router">test路由 不加名称没样式出不来</Link>
          <Routes>
            {/* <Route path='/user' element={<TestRouter />} /> */}
            <Route path="/test-router" Component={TestRouter}></Route>
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;

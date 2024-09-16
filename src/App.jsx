import { useState } from "react";
import "./App.css";

import { MyButton } from "./components/my-button";
import { MyButton2 } from "./components/my-button2";
import { ReduceCounter } from "./components/reduce-counter";

const userList = [
  {
    name: "a",
    value: "a",
  },
  {
    name: "b",
    value: "b",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [isButton2, setButtonShow] = useState(false);

  const userDOMList = userList.map((item, index) => {
    // 需要设置key
    return <li key={index}>{item.name}</li>;
  });

  const [userName, setUserName] = useState("tony");
  const handleFormateUserName = () => {
    // 他这里的un的参数就是useState传入的参数
    // 并且通过userName变量进行表达
    // 他这里的setUserName就像是微信小程序的setData
    setUserName((un) => un + "stark");
  };

  const [location, setLocation] = useState({
    lon: "110",
    lat: "22",
  });

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

  return (
    <>
      <ReduceCounter />
      <div className="m-App__content" onClick={handleChangeButton}>
        {isButton2 ? <MyButton2 /> : <MyButton />}
      </div>
      <select placeholder="select选择框">
        {userList.map((item, index) => 
        // 这里直接return了 
          <option value={item.value} key={index}>
            {item.name}
          </option>
        )}
      </select>
      <button onClick={handleFormateUserName}>{userName}</button>
      <ul> {userDOMList} </ul>
      <MyButton count={count} handleChangeCount={handleChangeCount} />
    </>
  );
}

export default App;

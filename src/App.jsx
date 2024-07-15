import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { MyButton } from "./components/my-button";
import { MyButton2 } from "./components/my-button2";
function App() {
  const [count, setCount] = useState(0);
  const [isButton2, setButtonShow] = useState(false);
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
  const userDOMList = userList.map((item, index) => {
    // 需要设置key
    return <li key={index}>{item.name}</li>;
  });

  const handleChangeButton = () => {
    setButtonShow(!isButton2);
  };

  const handleChangeCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="m-App__content" onClick={handleChangeButton}>
        {isButton2 ? <MyButton2 /> : <MyButton />}
      </div>
      <ul> {userDOMList} </ul>
      <MyButton count={count} handleChangeCount={handleChangeCount} />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleChangeCount}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

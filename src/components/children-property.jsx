import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import dayjs from "dayjs";

const OtherComponent = () => <>其他组件</>;

export const TimeContainer = () => (
  <Time>
    <OtherComponent />
  </Time>
);

const Time = ({ children }) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date(), 1000));
    // 如果你的这段代码直接使用 clearInterval 根本不会起作用
    //     当你写 return clearInterval(intervalId)，这行代码会立即执行 clearInterval(intervalId)，并返回其结果（通常是 undefined）。这意味着：
    // 定时器在 useEffect 刚刚设置后就立即被清除了。
    // React 得到的返回值是 undefined，而不是一个可以在后续调用的清理函数。
    // return clearInterval(intervalId);
    // 这种写法返回一个函数，而不是立即执行 clearInterval。这个返回的函数会被 React 保存，
    // 并在适当的时候（组件卸载或依赖项变化时）调用。
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1>当前时间:{dayjs(time).format("YYYY-MM-DD HH:mm:ss")} </h1>
      {children}
    </>
  );
};

Time.propTypes = {
  children: PropTypes.element,
};

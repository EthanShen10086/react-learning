import { useEffect } from "react";
import { getFinalState } from "./ProcessQueue.jsx";
import { useState } from "react";
import PropTypes from "prop-types";

TestCase.propTypes = {
  baseState: PropTypes.number,
  queue: PropTypes.array,
  expected: PropTypes.number,
};

function increment(n) {
  return n + 1;
}
increment.toString = () => "n => n+1";

export default function UseSelfStateApp() {
  return (
    <>
      <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
      <hr />
      <TestCase
        baseState={0}
        queue={[increment, increment, increment]}
        expected={3}
      />
      <hr />
      <TestCase baseState={0} queue={[5, increment]} expected={6} />
      <hr />
      <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
    </>
  );
}

function TestCase({ baseState, queue, expected }) {
  const [actual, setActual] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const result = await getFinalState(baseState, queue);
      setActual(result);
    };
    getData();
  }, []);

  //   const actual = getFinalState(baseState, queue);
  // 原先这个会报错
  //  Error: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.
  // at throwOnInvalidObjectType (chunk-CE7SSQE4.js?v=671bf0e0:9934:17)
  // React 只允许渲染字符串、数字、React 元素或数组，而不允许直接渲染 Promise 对象。

  return (
    <>
      <p>
        初始 state：<b>{baseState}</b>
      </p>
      <p>
        队列：<b>[{queue.join(", ")}]</b>
      </p>
      <p>
        预期结果：<b>{expected}</b>
      </p>
      <p
        style={{
          color: actual === expected ? "green" : "red",
        }}
      >
        你的结果：<b>{actual}</b> ({actual === expected ? "正确" : "错误"})
      </p>
    </>
  );
}

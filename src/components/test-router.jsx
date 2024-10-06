import { useEffect } from "react";
import { useState } from "react";

export const TestRouter = () => {
  const [userName, setUserName] = useState("--");
  useEffect(() => {
    // fetch("/api/getUser")
    // 可以直接写死 但是会报跨域的错
    // 需要借助以下手段进行代理处理跨域
    // 1. 在package.json中添加：proxy: 'localhost:3000'服务器的地址
    // 使用第一种方法有问题 根本代理不到后端 全都是304的请求
    // 2. 借助 http-proxy-middleware
    // 3. vite proxy
    // 使用proxy可以代理到后端 但是只能代理到静态资源
    fetch("/api/getUser")
      .then(
        (res) => res.json()
        // 后端返回的是一个string 所以在这里转化成json
      )
      .then((data) => {
        console.log(data.data.msg, " == data");
        setUserName(data.data.msg);
      })
      .catch((err) => {
        console.error("data error", err);
      });
    //  如果不加[] 那么每次刷新页面都会执行一次
    // 相当于多请求一次
  }, []);
  return <div>TestRouter {userName}</div>;
};

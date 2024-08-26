import React, { useEffect } from "react";

/**
 * React组件
 * @returns
 */
function App() {
  
  useEffect(() => {
    let str: string = "项目里可以正常使用ts啦";
    console.log(str);
  }, []);

  return (
    <>
      <div>我是react的第一个组件，也是最外层的组件！！！</div>
      <div>react项目创建成功了！已经跑起来了</div>
    </>
  );
}

export default App;

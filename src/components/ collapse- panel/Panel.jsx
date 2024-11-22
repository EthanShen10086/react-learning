import { useState } from "react";

export default function Panel({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => setOpen(!open)}>
        {open ? "Collapse" : "Expand"}
      </button>
      {/* UI销毁了 但是状态没有更新所以不会重新执行Panel 函数
      可以理解为Panel这个函数重不重新执行是他的生命周期 */}
      {open && children}
    </section>
  );
}

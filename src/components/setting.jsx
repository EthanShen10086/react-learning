import { useContext } from "react";
import { useTheme, useThemeDispatch } from "./useTheme";
import { ThemeContext, ThemeDispatchContext } from "./theme-provider";

export function Setting() {
  //   const theme = useTheme();
  //   const dispatch = useThemeDispatch();

  // 因为这里传递的不是对象或者数组 所以不需要解构操作 直接使用就行
  const theme = useContext(ThemeContext);
  const setTheme = useContext(ThemeDispatchContext);

  return (
    <section>
      <h1>Setting</h1>
      <>
        <button
          disabled={theme === "dark"}
          onClick={() => setTheme("dark")}
          //   onClick={() => dispatch({ type: "dark" })}
        >
          Dark
        </button>
        <button
          disabled={theme === "light"}
          onClick={() => setTheme("light")}
          //   onClick={() => dispatch({ type: "light" })}
        >
          Light
        </button>
        <button
          onClick={
            () => setTheme(theme === "light" ? "dark" : "light")
            // () =>
            // dispatch({
            //   type: "toggle",
            // })
          }
        >
          Toggle
        </button>
      </>
    </section>
  );
}

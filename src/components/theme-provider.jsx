import { useState } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types'

export const ThemeContext = createContext(null);
export const ThemeDispatchContext = createContext(null);

ThemeProvider.propTypes = {
    children: PropTypes.elementType
}

export function ThemeProvider({ children }) {
  // 初级的context可以直接使用useState
  const [theme, setTheme] = useState("light");
  // 稍微高级的运用可以使用useReducer
  //   const [theme, dispatch] = useReducer(themeReducer, "light");
  return (
    <ThemeContext.Provider value={theme}>
      {/* <ThemeContext.Provider value={theme}> */}
      {/* <ThemeDispatchContext.Provider value={dispatch}> */}
      {/* 这里除了可以写对象的形式还可以使用数组的形式 */}
      <ThemeDispatchContext.Provider value={ setTheme } >{children}</ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

function themeReducer(state, action) {
  switch (action.type) {
    case "dark": {
      return "dark";
    }
    case "light": {
      return "light";
    }
    case "toggle": {
      return state === "dark" ? "light" : "dark";
    }
    default:
      throw new Error("unknown action type: ", action.type);
  }
}

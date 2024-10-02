import { useReducer } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null);
export const ThemeDispatchContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, "light");
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
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

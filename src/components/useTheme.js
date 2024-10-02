import { useContext } from "react";
import { ThemeContext, ThemeDispatchContext } from "./theme-provider";

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeDispatch() {
  return useContext(ThemeDispatchContext);
}

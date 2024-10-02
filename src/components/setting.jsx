import { useTheme, useThemeDispatch } from "./useTheme";

export function Setting() {
  const theme = useTheme();
  const dispatch = useThemeDispatch();
  return (
    <section>
      <h1>Setting</h1>
      <>
        <button
          disabled={theme === "dark"}
          onClick={() => dispatch({ type: "dark" })}
        >
          Dark
        </button>
        <button
          disabled={theme === "light"}
          onClick={() => dispatch({ type: "light" })}
        >
          Light
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "toggle",
            })
          }
        >
          Toggle
        </button>
      </>
    </section>
  );
}

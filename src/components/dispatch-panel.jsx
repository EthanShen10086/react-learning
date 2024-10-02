import { useTheme } from "./useTheme";

export function DispatchPanel() {
  const theme = useTheme();
  return (
    <section>
      <h1>Dispatch Panel</h1>
      <p>theme: {theme}</p>
    </section>
  );
}

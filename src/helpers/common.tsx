export function getUserTheme(theme: string | undefined) {
    if (theme === "system") {
      const prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    } else if (theme === "dark") {
      return "dark";
    } else {
      return "light";
    }
}
import React from 'react'
import { useTheme } from "../Context/Theme.context";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1 className="text-3xl underline font-semibold mt-4">
        Dark Mode / Light Mode
      </h1>
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
        className="cursor-pointer"
      />
      <button
        onClick={toggleTheme}
        className={`cursor-pointer ml-4 rounded px-2 text-sm border-[1px] ${theme ===
        "dark"
          ? "border-white  text-whborder-white"
          : "border-zinc-600  text-zinc-600"}`}
      >
        {theme === "dark" ? "Dark mode" : "Light mode"}
      </button>
    </div>
  )
}

export default App

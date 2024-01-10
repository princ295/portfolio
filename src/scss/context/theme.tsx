import React, { useEffect, useState } from "react";

interface ContextProps {
  readonly theme: boolean;
  readonly toggleTheme: () => void;
}

const Theme = React.createContext<ContextProps>({
  theme: false,
  toggleTheme: () => null
});

type ThemeProps = {
  children: React.ReactElement
}

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-dark-mode", String(theme))
  },[theme])

  const toggleTheme = () => {
    setTheme(_ => !_)
  }

  return (
    <Theme.Provider value={{toggleTheme, theme}}>
      {children}
    </Theme.Provider>
  )
}
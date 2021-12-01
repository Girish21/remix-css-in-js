import * as React from 'react'

const ThemeContext = React.createContext<JSX.Element[] | null>(null)

const ThemeProvider: React.FC<{ value: JSX.Element[] | null }> = ({
  children,
  value,
}) => <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>

const useTheme = () => {
  return React.useContext(ThemeContext)
}

export { ThemeProvider, useTheme }

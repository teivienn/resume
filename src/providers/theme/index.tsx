import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { NextUi } from './next-ui';

interface IContext {
  mode: 'light' | 'dark';
  toggleMode: (mode: 'light' | 'dark') => void;
}

const Context = createContext<IContext>({} as never);

export const useTheme = () => useContext(Context);

interface IThemeProviderProps {
  theme: 'light' | 'dark';
}

export const ThemeProvider = ({
  children,
  theme,
}: PropsWithChildren<IThemeProviderProps>) => {
  const [mode, setMode] = useState<IContext['mode']>(theme);

  const toggleMode: IContext['toggleMode'] = (mode) => {
    document.cookie = `theme=${mode}`;
    setMode(mode);
  };

  return (
    <Context.Provider value={{ mode, toggleMode }}>
      <NextUi theme={mode}>{children}</NextUi>
    </Context.Provider>
  );
};

import { NextUIProvider, createTheme } from '@nextui-org/react';
import { PropsWithChildren, useMemo } from 'react';

interface INextUiProps {
  theme: 'light' | 'dark';
}

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
});

export const NextUi = ({
  children,
  theme,
}: PropsWithChildren<INextUiProps>) => {
  const _theme = useMemo(
    () => (theme === 'light' ? lightTheme : darkTheme),
    [theme],
  );

  return <NextUIProvider theme={_theme}>{children}</NextUIProvider>;
};

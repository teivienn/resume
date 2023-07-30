import { PropsWithChildren } from 'react';
import { ThemeProvider } from './theme';

interface IProvidersProps {
  theme: 'light' | 'dark';
}

export const Providers = ({
  children,
  theme,
}: PropsWithChildren<IProvidersProps>) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

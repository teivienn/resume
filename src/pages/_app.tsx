import {AppProps} from 'next/app';
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component }: AppProps) {
  return (
    <NextUIProvider>
      <Component />
    </NextUIProvider>
  )
};

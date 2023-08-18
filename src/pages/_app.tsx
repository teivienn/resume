import NextApp, { AppContext, AppProps } from 'next/app';
import { Providers } from '~/providers';

interface IAppProps extends AppProps {
  theme: 'light' | 'dark';
}

export default function App({ Component, pageProps, theme }: IAppProps) {
  return (
    <Providers theme={theme}>
      <Component {...pageProps} />
    </Providers>
  );
}

App.getInitialProps = async (context: AppContext) => {
  const ctx = await NextApp.getInitialProps(context);
  const { theme = 'light' } = (context.ctx.req as unknown as { cookies: never })
    ?.cookies;

  return { ...ctx, theme };
};

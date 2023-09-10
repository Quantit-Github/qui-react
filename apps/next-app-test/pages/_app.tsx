import { ThemeProvider } from '@quantit/qui-react';
import { AppProps } from 'next/app';

export default function MyApp(props: AppProps) {
  return (
    <>
      <h1>MyApp</h1>
      <ThemeProvider>
        <props.Component {...props.pageProps} />
      </ThemeProvider>
    </>
  );
}

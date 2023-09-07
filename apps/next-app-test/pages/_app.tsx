import { QuiThemeProvider } from '@quantit/qui-react';
import { AppProps } from 'next/app';

export default function MyApp(props: AppProps) {
  return (
    <>
      <h1>MyApp</h1>
      <QuiThemeProvider>
        <props.Component {...props.pageProps} />
      </QuiThemeProvider>
    </>
  );
}

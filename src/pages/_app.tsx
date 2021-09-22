import { AppProps } from 'next/app';
import { SwitchContextProvider } from '../context/SwitchContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <SwitchContextProvider>
      <Component {...pageProps} />
    </SwitchContextProvider>
  );
}

MyApp.propTypes = AppProps;

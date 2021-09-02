import { AppProps } from 'next/app';
import { SwitchContextProvider } from '../context/SwitchContext';

function MyApp({ Component, pageProps }) {
  return (
    <SwitchContextProvider>
      <Component {...pageProps} />
    </SwitchContextProvider>
  );
}

export default MyApp;

MyApp.propTypes = AppProps;

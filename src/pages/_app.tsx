import { AppProps } from 'next/app';
import { SwitchContextProvider } from '../context/SwitchContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SwitchContextProvider>
      <Component {...pageProps} />
    </SwitchContextProvider>
  );
}

import '../styles/globals.css';
import { GlobalStyles } from '../styles/globalstyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

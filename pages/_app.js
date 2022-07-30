import { useCallback, useState } from 'react';
import '../styles/globals.css';
import { GlobalStyles } from '../styles/globalstyles';
import CurrentUserContext from '../contexts/CurrentUserContext';

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState({ isLoggedIn: false, phoneNumber: null, email: null });
  const handleLogin = useCallback(
    (user) => {
      const { email, phoneNumber } = user;
      setCurrentUser({ ...currentUser, email, phoneNumber, isLoggedIn: true, isAdmin: false });
    },
    [currentUser]
  );
  const handleLogout = () => {
    setCurrentUser({ ...currentUser, phoneNumber: null, email: null, isLoggedIn: false });
  };
  const handleRegister = () => {};
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <CurrentUserContext.Provider value={currentUser}>
        {/* prettier-ignore */}
        <Component {...pageProps}
          handleLogout={handleLogout}
          handleLogin={handleLogin}
          handleRegister={handleRegister}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default MyApp;

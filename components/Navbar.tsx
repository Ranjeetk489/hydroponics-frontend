import styled from 'styled-components';
import Link from 'next/link';
import { MainLogo } from './MainLogo';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import CurrentUserContext from '../contexts/CurrentUserContext';

const Nav = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 2.5rem 2rem 0;
`;

const StyledLinkLabel = styled.a<{ isActive: boolean }>`
  border-bottom: ${({ isActive }) => isActive && '1px solid rgb(106, 184, 139)'};
  font-size: 1.2rem;
`;

const Navbar = (props: any) => {
  const { pathname } = useRouter();
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      {currentUser.isLoggedIn && <div style={{ textAlign: 'center' }}>{`Logged in as ${currentUser.email}`}</div>}
      <HeaderWrapper>
        <MainLogo />
        <Nav>
          {/* Home link */}
          {currentUser.isLoggedIn && (
            <Link href='/' passHref>
              <StyledLinkLabel isActive={pathname === '/'}>Home</StyledLinkLabel>
            </Link>
          )}
          {/* User dashboard link */}
          {currentUser.isLoggedIn && (
            <Link href='/user-dashboard' passHref>
              <StyledLinkLabel isActive={pathname === '/user-dashboard'}>User</StyledLinkLabel>
            </Link>
          )}
          {/* Admin link */}
          {currentUser.isAdmin && (
            <Link href='/admin-dashboard' passHref>
              <StyledLinkLabel isActive={pathname === '/admin-dashboard'}>Admin</StyledLinkLabel>
            </Link>
          )}
          {/* Log in link */}
          {!currentUser.isLoggedIn && (
            <Link href='/signin' passHref>
              <StyledLinkLabel isActive={pathname === '/signin'}>Login</StyledLinkLabel>
            </Link>
          )}
          {/* Log out link */}
          {currentUser.isLoggedIn && (
            <Link href='/signin' passHref>
              <StyledLinkLabel onClick={(e) => props.handleLogout(e)} isActive={pathname === '/signin'}>
                Logout
              </StyledLinkLabel>
            </Link>
          )}
          {/* Register link */}
          {!currentUser.isLoggedIn && (
            <Link href='/signup' passHref>
              <StyledLinkLabel isActive={pathname === '/signup'}>Register</StyledLinkLabel>
            </Link>
          )}
        </Nav>
      </HeaderWrapper>
    </>
  );
};

export default Navbar;

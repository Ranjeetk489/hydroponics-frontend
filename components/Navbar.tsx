import styled, { StyledComponent, StyledComponentPropsWithRef } from 'styled-components';
import Link from 'next/link';
import { MainLogo } from './MainLogo';
import { useEffect } from 'react';
import { Router, useRouter } from 'next/router';

const Nav = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  padding: 2rem;
`;

const StyledLinkLabel = styled.a<{ isActive: boolean }>`
  border-bottom: ${({ isActive }) => isActive && '1px solid rgb(106, 184, 139)'};
`;

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <HeaderWrapper>
      <MainLogo />
      <Nav>
        <Link href="/" passHref>
          <StyledLinkLabel isActive={pathname === '/'}>Home</StyledLinkLabel>
        </Link>
        <Link href="/user-dashboard" passHref>
          <StyledLinkLabel isActive={pathname === '/user-dashboard'}>User</StyledLinkLabel>
        </Link>
        <Link href="/admin-dashboard" passHref>
          <StyledLinkLabel isActive={pathname === '/admin-dashboard'}>Admin</StyledLinkLabel>
        </Link>
        <Link href="/signin" passHref>
          <StyledLinkLabel isActive={pathname === '/signin'}>Login</StyledLinkLabel>
        </Link>
        <Link href="/signup" passHref>
          <StyledLinkLabel isActive={pathname === '/signup'}>Register</StyledLinkLabel>
        </Link>
      </Nav>
    </HeaderWrapper>
  );
};

export default Navbar;

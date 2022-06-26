import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/images/hydroponics-logowebp.webp';

const Nav = styled.div`
  /* max-width: 200px; */
  /* margin: auto; */
  display: flex;
  gap: 1rem;
  /* justify-content: center; */
  /* margin-top: 2rem; */
`;
// const StyledLink = styled.a``;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  /* justify-items: center; */
  padding: 2rem;
`;

const Navbar = () => {
  return (
    <HeaderWrapper>
      <div style={{ maxWidth: '30%' }}>
        <Image src={logo} alt="Hydroponics logo"></Image>
      </div>
      <Nav>
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/user-dashboard" passHref>
          User
        </Link>
        <Link href="/admin-dashboard" passHref>
          Admin
        </Link>
        <Link href="/signin" passHref>
          Login
        </Link>
        <Link href="/signup" passHref>
          Register
        </Link>
      </Nav>
    </HeaderWrapper>
  );
};

export default Navbar;

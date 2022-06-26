import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.div`
  max-width: 200px;
  margin: auto;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
`;
// const StyledLink = styled.a``;

const Navbar = () => {
  return (
    <>
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
      </Nav>
    </>
  );
};

export default Navbar;

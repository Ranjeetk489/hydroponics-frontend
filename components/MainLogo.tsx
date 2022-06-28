import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import logo from '../public/hydroponics-logowebp.webp';

const LogoWrapper = styled.div`
  width: 200px;

  @media (max-width: 600px) {
    width: 120px;
  }
`;

export const MainLogo = () => {
  return (
    <LogoWrapper>
      <Link href="/" passHref>
        <a>
          <Image src={logo} alt="Hydroponics logo"></Image>
        </a>
      </Link>
    </LogoWrapper>
  );
};

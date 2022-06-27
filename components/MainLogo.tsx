import Image from 'next/image';
import logo from '../assets/images/hydroponics-logowebp.webp';
import Link from 'next/link';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  max-width: 200px;

  @media (max-width: 600px) {
    max-width: 120px;
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

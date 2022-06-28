import Image from 'next/image';
import logo from '../assets/images/hydroponics-logowebp.webp';
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';

const LogoWrapper = styled.div`
  max-width: 200px;

  @media (max-width: 600px) {
    max-width: 120px;
  }
`;

export const MainLogo = () => {
  // const [logoSrc, setLogoSrc] = useState('/../assets/images/hydroponics-logowebp.webp');

  return (
    <LogoWrapper>
      <Link href="/" passHref>
        <a>
          <Image priority src={logo} alt="Hydroponics logo"></Image>
        </a>
      </Link>
    </LogoWrapper>
  );
};

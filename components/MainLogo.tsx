import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  width: 200px;

  @media (max-width: 600px) {
    width: 120px;
  }
`;

export const MainLogo = () => {
  return (
    <LogoWrapper>
      <Link href='/' passHref>
        <a>
          <Image layout='responsive' width={'355px'} height={'50px'} src='/hydroponics-logowebp.webp' alt='Hydroponics logo'></Image>
        </a>
      </Link>
    </LogoWrapper>
  );
};

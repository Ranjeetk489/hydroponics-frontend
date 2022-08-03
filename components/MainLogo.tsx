import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const LogoWrapper = styled.h1`
  width: fit-content;
  margin: 0;


  &::before{
    content: "•";
    margin-right: 7px;
  }
`;

export const MainLogo = () => {
  return (
    <LogoWrapper>
      {/* <Link href='/' passHref>
        <a>
          <Image layout='responsive' width={'355px'} height={'50px'} src='/hydroponics-logowebp.webp' alt='Hydroponics logo'></Image>
        </a>
      </Link> */}
      Hydroponics Network
    </LogoWrapper>
  );
};

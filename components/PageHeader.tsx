import styled from 'styled-components';

export const Header = styled.h1`
  text-align: center;
`;

const PageHeader = (props: any) => {
  return <Header>{props.children}</Header>;
};

export default PageHeader;

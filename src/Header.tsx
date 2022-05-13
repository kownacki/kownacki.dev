import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HEADER_HEIGHT, MAIN_WIDTH, ROOT_PATH } from './contants';

const Root = styled.header`
  background: black;
  color: white;
  font-size: 30px;
  font-family: monospace;
  height: ${HEADER_HEIGHT}px;
  line-height: ${HEADER_HEIGHT}px;
`;

const Container = styled.div`
  width: ${MAIN_WIDTH}px;
  margin: auto;
`;

const HeaderLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const Header: FC = () => {
  return (
    <Root>
      <Container>
        <HeaderLink to={ROOT_PATH}>
          Kownacki.dev
        </HeaderLink>
      </Container>
    </Root>
  );
};

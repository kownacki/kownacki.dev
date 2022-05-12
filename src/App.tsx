import React, { FC } from 'react';
import styled from 'styled-components';
import { Header } from './Header';

export const PAGE_WIDTH = 1200;

const Root = styled.div`
  width: ${PAGE_WIDTH}px;
  margin: 0 auto;
`;

export const App: FC = () => {
  return (
    <Root>
      <Header />
    </Root>
  );
};

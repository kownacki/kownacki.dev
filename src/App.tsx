import React, { FC } from 'react';
import styled from 'styled-components';

export const PAGE_WIDTH = 1200;

const Root = styled.div`
  width: ${PAGE_WIDTH}px;
  margin: 0 auto;
`;

export const App: FC = () => {
  return (
    <Root>
      <header>
        <p>
          Yay!
        </p>
      </header>
    </Root>
  );
};

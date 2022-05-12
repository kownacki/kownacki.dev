import React, { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header';
import { Landing } from './Landing';
import { Tbd } from './Tbd';

export const PAGE_WIDTH = 1200;

const Root = styled.div`
  width: ${PAGE_WIDTH}px;
  margin: 0 auto;
`;

export const App: FC = () => {
  return (
    <Root>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="tbd" element={<Tbd />} />
      </Routes>
    </Root>
  );
};

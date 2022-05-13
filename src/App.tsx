import React, { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Article } from './Article';
import { articles } from './articles';
import { MAIN_WIDTH } from './contants';
import { Header } from './Header';
import { Landing } from './Landing';
import { ArticleType } from './types';

export const pathToArticleId: Record<string, string> = {
  '/test': '1',
};

const Root = styled.div`
`;

const Main = styled.div`
  width: ${MAIN_WIDTH}px;
  margin: 0 auto;
`;

export const App: FC = () => {
  return (
    <Root>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/test" element={<Article article={articles.find((article) => article.id = pathToArticleId['/test']) as ArticleType} />} />
        </Routes>
      </Main>
    </Root>
  );
};

import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Article } from './Article';
import { articles } from './articles';
import { MAIN_WIDTH, ROOT_PATH } from './contants';
import { Header } from './Header';
import { Landing } from './Landing';
import { ArticleType } from './types';

export const pathToArticleId: Record<string, string> = {
  '/test': '1',
};

const Root = styled.div`
`;

const Main = styled.div`
  max-width: ${MAIN_WIDTH}px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const App: FC = () => {
  return (
    <Root>
      <Header />
      <Main>
        <Routes>
          <Route path={ROOT_PATH} element={<Landing />} />
          <Route path="/test" element={<Article article={articles.find((article) => article.id = pathToArticleId['/test']) as ArticleType} />} />
        </Routes>
      </Main>
    </Root>
  );
};

import React, { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Article } from './Article';
import { articles } from './articles';
import { Header } from './Header';
import { Landing } from './Landing';
import { ArticleType } from './types';

export const pathToArticleId: Record<string, string> = {
  '/test': '1',
};

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
        <Route path="/test" element={<Article article={articles.find((article) => article.id = pathToArticleId['/test']) as ArticleType} />} />
      </Routes>
    </Root>
  );
};

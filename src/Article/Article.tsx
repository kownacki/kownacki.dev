import React, { FC } from 'react';
import styled from 'styled-components';
import { ArticleType } from '../types';
import { Author } from './Author';
import { Avatar } from './Avatar';
import { Date } from './Date';

const Root = styled.div`
`;

const Introduction = styled.p`
  font-weight: 700;
`;

export interface ArticleProps {
  article: ArticleType,
}

export const Article: FC<ArticleProps> = ({ article}) => {
  return (
    <Root>
      <h1>{article.title}</h1>
      <Avatar />
      <Author />
      <Date date={article.publishDate} />
      <Introduction>
        {article.introduction}
      </Introduction>
      <div
        dangerouslySetInnerHTML={{__html: article.content}}>
      </div>
    </Root>
  );
};

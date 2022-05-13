import React, { FC } from 'react';
import styled from 'styled-components';
import { ArticleType } from '../types';
import { Author } from './Author';
import { Avatar } from './Avatar';
import { Date } from './Date';

const Root = styled.div`
`;

export interface ArticleProps {
  article: ArticleType,
}

export const Article: FC<ArticleProps> = ({ article: {title, publishDate, content }}) => {
  return (
    <Root>
      <h1>{title}</h1>
      <Avatar />
      <Author />
      <Date date={publishDate} />
      <div
        dangerouslySetInnerHTML={{__html: content}}>
      </div>
    </Root>
  );
};

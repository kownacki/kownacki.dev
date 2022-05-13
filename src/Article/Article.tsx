import React, { FC } from 'react';
import styled from 'styled-components';
import { ArticleType } from '../types';
import { Author } from './Author';
import { Avatar } from './Avatar';

export interface ArticleProps {
  article: ArticleType,
}

const Root = styled.div`
`;

export const Article: FC<ArticleProps> = ({ article: {title, content }}) => {
  return (
    <Root>
      <h1>{title}</h1>
      <Avatar />
      <Author />
      <div
        dangerouslySetInnerHTML={{__html: content}}>
      </div>
    </Root>
  );
};

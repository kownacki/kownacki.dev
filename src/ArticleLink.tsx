import React, { FC } from 'react';
import styled from 'styled-components';
import { ArticleType } from './types';
import { createArticlePath } from './utils';

export interface ArticleProps {
  article: ArticleType,
}

const Link = styled.a`
`;

export const ArticleLink: FC<ArticleProps> = ({ article: {title, permalink}}) => {
  return (
    <Link
      href={createArticlePath(permalink)}>
      {title}
    </Link>
  );
};

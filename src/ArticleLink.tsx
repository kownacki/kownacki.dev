import React, { FC } from 'react';
import styled from 'styled-components';
import { ArticleType } from './types';
import { createArticlePath } from './utils';

const Link = styled.a`
`;

export interface ArticleLinkProps {
  article: ArticleType,
}

export const ArticleLink: FC<ArticleLinkProps> = ({ article: {title, permalink}}) => {
  return (
    <Link
      href={createArticlePath(permalink)}>
      {title}
    </Link>
  );
};

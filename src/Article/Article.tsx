import React, { FC, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-twilight.css';
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

const upload = () => {
  const input = document.getElementById('input');
  input?.click();
}

export const Article: FC<ArticleProps> = ({ article}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [article.content]);

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
      <input
        id="input"
        type="file"
        accept="image/png, image/jpeg"
      />
      <button onClick={upload}>Upload</button>
    </Root>
  );
};

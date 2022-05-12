import React, { FC } from 'react';
import styled from 'styled-components';
import { ArticleLink } from './ArticleLink';
import { articles } from './articles';

const Root = styled.header`
`;

export const Landing: FC = () => {
  return (
    <Root>
      Landing
      <div>
        {articles.map((article) => {
          return (
            <ArticleLink article={article} key={article.id} />
          );
        })}
      </div>
    </Root>
  );
};

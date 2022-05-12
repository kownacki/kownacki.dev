import { content } from './articles/test';
import { ArticleType } from './types';

export const articles: ArticleType[] = [
  {
    id: '1',
    publishDate: '2022-05-12',
    permalink: 'test',
    title: 'Test Article',
    content: content,
  },
];

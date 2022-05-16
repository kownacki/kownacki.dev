import { introduction as testIntroduction, content as testContent } from './articles/test';
import { ArticleType } from './types';

export const articles: ArticleType[] = [
  {
    id: '1',
    publishDate: '2022-05-12',
    permalink: 'test',
    title: 'How to resize images in JavaScript on your website',
    introduction: testIntroduction,
    content: testContent,
  },
];

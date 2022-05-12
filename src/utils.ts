import { ARTICLES_ROOT_PATH } from './contants';

export const createArticlePath = (permalink: string) => {
  return `${ARTICLES_ROOT_PATH}${permalink}`;
};

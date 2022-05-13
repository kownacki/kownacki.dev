import React, { FC } from 'react';
import styled from 'styled-components';
import { AUTHOR } from '../contants';

const Root = styled.div`
`;

export const Author: FC = () => {
  return (
    <Root>
      By {AUTHOR}
    </Root>
  );
};

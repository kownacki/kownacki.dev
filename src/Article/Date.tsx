import React, { FC } from 'react';
import styled from 'styled-components';

const Root = styled.div`
`;

export interface DateProps {
  date: string,
}

export const Date: FC<DateProps> = ({date}) => {
  return (
    <Root>
      Posted on {date}
    </Root>
  );
};

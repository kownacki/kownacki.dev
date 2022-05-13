import React, { FC } from 'react';
import styled from 'styled-components';
import avatarImg from '../images/avatar.jpg';

export const avatarSize = 64;

const Root = styled.div`
  width: ${avatarSize}px;
  height: ${avatarSize}px;
  border-radius: calc(${avatarSize}px / 2);
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Avatar: FC = () => {
  return (
    <Root>
      <Img src={avatarImg} />
    </Root>
  );
};

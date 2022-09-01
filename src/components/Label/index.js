import React from 'react';
import * as S from './style';

const Label = ({ children }) => (
    <S.Typography>
      <S.Content>{children}</S.Content>
    </S.Typography>
);

export default Label;

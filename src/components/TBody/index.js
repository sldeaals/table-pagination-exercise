import React, { Children } from 'react';
import Label from '../Label';
import * as S from './style';

const TBody = ({ children }) => {
  if (Children.count(children) === 0) {
    return (
      <S.TBody>
        <tr>
          <td colSpan={100}>
            <S.Wrapper flexDirection="column" alignItems="center" gap="18">
              <Label>No Data</Label>
            </S.Wrapper>
          </td>
        </tr>
      </S.TBody>
    );
  }

  return <tbody>{children}</tbody>;
};

export default TBody;

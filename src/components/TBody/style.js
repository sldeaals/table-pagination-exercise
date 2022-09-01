import PropTypes from "prop-types";
import styled, { css } from 'styled-components';

export const TBody = styled.tbody`
  td:nth-child(1n)[colspan] {
    width: auto;
    flex: auto;
  }
`;

export const Wrapper = styled.div`
    ${({ flexDirection, alignItems, gap }) => css`
        width: 100%;
        display: flex;
        ${flexDirection && `flex-direction: ${flexDirection};`}
        ${alignItems && `align-items: ${alignItems};`}
        ${gap && `gap: ${gap}px;`}
    `}
`;

Wrapper.propTypes = {
    flexDirection: PropTypes.string,
    alignItems: PropTypes.string,
    gap: PropTypes.string
};

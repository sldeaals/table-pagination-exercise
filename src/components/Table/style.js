import PropTypes from "prop-types";
import styled, { css } from 'styled-components';

export const Table = styled.table`
    width: 100%;
    margin: 0;
    border-spacing: 0;
    border-collapse: separate;
    overflow-y: auto;
`;

export const THead = styled.thead`
    zIndex: 1;
    position: 'sticky';
    top: 0;
`;

export const Tr = styled.tr`
  ${({ pointer }) => css`
    cursor: ${pointer ? 'pointer' : 'auto'};
    transition: background-color 1ms ease;
    &:hover {
        background-color: #EFEFEF;
    }
  `}
`;

Tr.propTypes = {
    pointer: PropTypes.bool
};
  
export const Td = styled.td = ({
    align,
}) => css`
    padding: 12px 8px;
    font-weight: normal;
    text-align: ${align ?? 'left'};
`;

Td.propTypes = {
    align: PropTypes.string
};

export const Th = styled.th = ({ align }) => css`
    padding: 12px 8px;
    font-weight: normal;
    text-align: ${align ?? 'left'};
    &:hover {
        color: red;
    }
`;

Th.propTypes = {
    align: PropTypes.string
};

export const styles = {
    table: {
        width: "100%"
    },
    tr: {
        backgroundColor: "#EFEFEF"
    },
    th: {
        textAlign: "left",
        padding: "8px"
    },
    td: {
        textAlign: "left",
        padding: "8px"
    },
    tableFooter: {
        padding: "8px 0px",
        display: "flex",
        gap: "8px",
        alignItems: "center"
    }
};

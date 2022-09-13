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
        backgroundColor: "#fff",
        color: "rgba(0, 0, 0, 0.87)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        borderRadius: "4px",
        boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        width: "100%",
        marginBottom: "16px"
    },
    tr: {
        backgroundColor: "#EFEFEF"
    },
    th: {
        textAlign: "left",
        padding: "16px",
        borderBottom: "1px solid rgba(224, 224, 224, 1)"
    },
    td: {
        textAlign: "left",
        padding: "16px",
        borderBottom: "1px solid rgba(224, 224, 224, 1)"
    },
    tableFooter: {
        padding: "0px 8px",
        display: "flex",
        gap: "16px",
        alignItems: "center"
    }
};

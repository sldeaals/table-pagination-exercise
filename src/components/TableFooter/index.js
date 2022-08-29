import React from "react";
import PropTypes from "prop-types";
import styles from "./style";

const TableFooter = ({
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  pageIndex,
  pageOptions
}) => (
  <>
    {canPreviousPage && (
      <button style={styles.pageButton} onClick={() => previousPage()}>
        {"<"}
      </button>
    )}
    {canNextPage && (
      <button style={styles.pageButton} onClick={() => nextPage()}>
        {">"}
      </button>
    )}
    <>
      <span>{`Page ${pageIndex + 1} of ${pageOptions.length}`}</span>
    </>
  </>
);

TableFooter.propTypes = {
  previousPage: PropTypes.func,
  canPreviousPage: PropTypes.bool,
  nextPage: PropTypes.func,
  canNextPage: PropTypes.bool,
  pageIndex: PropTypes.number,
  pageOptions: PropTypes.array
};

export default TableFooter;

import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "./style";

const TableFooter = memo(({
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  pageIndex,
  pageOptions,
  pageSize,
}) => (
  <>
    <span>{`${pageIndex + 1} - ${pageSize} of ${pageOptions.length}`}</span>
    <button style={styles.pageButton} onClick={() => previousPage()} disabled={!canPreviousPage}>
      {"<"}
    </button>
    <button style={styles.pageButton} onClick={() => nextPage()} disabled={!canNextPage}>
      {">"}
    </button>
  </>
));

TableFooter.propTypes = {
  previousPage: PropTypes.func,
  canPreviousPage: PropTypes.bool,
  nextPage: PropTypes.func,
  canNextPage: PropTypes.bool,
  pageIndex: PropTypes.number,
  pageOptions: PropTypes.array,
  pageSize: PropTypes.number
};

export default TableFooter;

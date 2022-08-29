import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";
import { useTable, usePagination } from "react-table";
import TableFooter from "../TableFooter";
import Dropdown from "../Dropdown";
import styles from "./style";

const Table = memo((props) => {
  const { data } = props;
  const columns = useMemo(
    () => [
      {
        Header: "Test",
        columns: [
          {
            Header: "col1",
            accessor: "col1"
          },
          {
            Header: "col2",
            accessor: "col2"
          },
          {
            Header: "col3",
            accessor: "col3"
          }
        ]
      }
    ],
    []
  );

  const {
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data: data
    },
    usePagination
  );

  const rows = useMemo(
    () =>
      page.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
            })}
          </tr>
        );
      }),
    [page, prepareRow]
  );

  return (
    <>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.cell}>col1</th>
            <th style={styles.cell}>col2</th>
            <th style={styles.cell}>col3</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <div style={styles.tableFooter}>
        <TableFooter
          previousPage={previousPage}
          canPreviousPage={canPreviousPage}
          nextPage={nextPage}
          canNextPage={canNextPage}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          setPageSize={setPageSize}
          pageSize={pageSize}
        />
        <Dropdown
          setPageSize={setPageSize}
          pageSize={pageSize}
          gotoPage={gotoPage}
        />
      </div>
    </>
  );
});

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      col1: PropTypes.string,
      col2: PropTypes.string,
      col3: PropTypes.string
    })
  )
};

export default Table;

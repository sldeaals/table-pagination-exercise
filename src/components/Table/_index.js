import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";
import { useTable, usePagination } from "react-table";
import TableFooter from "../TableFooter";
import Dropdown from "../Dropdown";
import TBody from "../TBody";
import * as S from './style';

const Table_ = memo((props) => {
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
      page.map((row, index) => {
        prepareRow(row);
        return (
          <S.Tr key={index}>
            {row.cells.map((cell, i) => {
              return <S.Td key={i}>{cell.render("Cell")}</S.Td>;
            })}
          </S.Tr>
        );
      }),
    [page, prepareRow]
  );

  return (
    <>
      <S.Table>
        <S.THead>
          <S.Tr>
            <S.Th>col1</S.Th>
            <S.Th>col2</S.Th>
            <S.Th>col3</S.Th>
          </S.Tr>
        </S.THead>
        <TBody>{rows}</TBody>
      </S.Table>
      <div style={S.styles.tableFooter}>
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

Table_.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      col1: PropTypes.string,
      col2: PropTypes.string,
      col3: PropTypes.string
    })
  )
};

export default Table_;

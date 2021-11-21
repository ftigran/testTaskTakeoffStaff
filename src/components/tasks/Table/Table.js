import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "../Pagination/Pagination";

import "./Table.scss";

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = props.rowsPerPage || 5;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className={"table"}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className={"tableHeader"}>
              {props.columns.map((column) => (
                <TableCell key={column.id} {...column.params}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows
              .slice(
                (page - 1) * rowsPerPage,
                (page - 1) * rowsPerPage + rowsPerPage
              )
              .map((row, id) => {
                return (
                  <TableRow hover tabIndex={-1} key={id}>
                    {props.columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} className={"tableCell"}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        rowsPerPage={rowsPerPage}
        rows={props.rows.length}
        page={page}
        handler={handleChangePage}
      />
    </div>
  );
}

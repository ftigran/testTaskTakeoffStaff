import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import "./Pagination.scss";

export default function getPagination(props) {
  const { rowsPerPage = 5, rows, page, handler, className } = props;
  if (rows >= rowsPerPage) {
    return (
      <Pagination
        className={"Pagination " + className}
        count={Math.ceil(rows / rowsPerPage)}
        page={page}
        onChange={handler}
      />
    );
  } else return null;
}

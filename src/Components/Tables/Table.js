import React, { useState } from "react";
import { tableColumns } from "./Columns";
import { useTable } from "react-table";
export const Table = () => {
  const [data, setData] = useState([]);
  const tableInstance = useTable({ tableColumns, data });
  console.log(tableInstance);
  return <>Table</>;
};

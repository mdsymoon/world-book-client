import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getBookList } from "./../../redux/BookList/BookListSlice";
import { FcAlphabeticalSortingAz } from "react-icons/fc";
import { FcNumericalSorting12 } from "react-icons/fc";

const BookData = () => {
  const bookData = useSelector(getBookList);
  const [data, setData] = useState(bookData);
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };
  return (
    <div className="container mx-auto mt-5">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-gray-300 text-xl">
              <TableCell>Book Image</TableCell>
              <TableCell align="left" onClick={() => sorting("name")}>
                <div className="flex">
                  Name
                  <FcAlphabeticalSortingAz className="text-2xl ml-2 cursor-pointer"/>
                </div>
              </TableCell>
              <TableCell align="left" onClick={() => sorting("writer")}>
                <div className="flex">
                  Writer
                  <FcAlphabeticalSortingAz className="text-2xl ml-2 cursor-pointer"/>
                </div>
              </TableCell>
              <TableCell align="left" onClick={() => sorting("price")}>
                <div className="flex">
                  Price
                  <FcNumericalSorting12 className="text-2xl ml-2 cursor-pointer"/>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={`data:image/png;base64,${row.img.img}`}
                    alt=""
                    style={{ width: 80 }}
                  />
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.writer}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BookData;

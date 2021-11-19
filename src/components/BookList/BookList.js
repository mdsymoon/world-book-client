import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getBookList } from "../../redux/BookList/BookListSlice";

const BookList = () => {
  const bookList = useSelector(getBookList);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search "
          className="border-2 border-black w-80 md:w-96 p-2 my-10"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="container justify-items-center gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {bookList
          .filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((book) => (
            <div className="">
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={`data:image/png;base64,${book.img.img}`}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom component="div">
                    <div className="flex justify-between text-lg">
                      <h6>{book.name}</h6>
                      <h6 className="text-indigo-300">${book.price}</h6>
                    </div>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Add To Favorite</Button>
                </CardActions>
              </Card>
            </div>
          ))}
      </div>
    </main>
  );
};

export default BookList;

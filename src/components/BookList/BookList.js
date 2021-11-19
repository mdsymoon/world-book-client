import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getBookList } from "../../redux/BookList/BookListSlice";

const BookList = () => {
  const bookList = useSelector(getBookList);

  return (
    <div className="container justify-items-center gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
      {bookList.map((book) => (
        <div className="">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={`data:image/png;base64,${book.img.img}`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {book.name}
                {book.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default BookList;

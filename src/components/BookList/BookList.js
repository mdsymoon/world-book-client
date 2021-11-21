import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks, getBookList } from "../../redux/BookList/BookListSlice";
import { addFavorite } from "../../redux/FavoriteList/FavoriteSlice";

const BookList = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const bookList = useSelector(getBookList);
  const [menuItem, setMenuItem] = useState(bookList);
  const [buttons, setButtons] = useState([]);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(bookList);
      return;
    }
    const filteredData = bookList.filter((item) => item.writer === button);
    setMenuItem(filteredData);
  };

  useEffect(() => {
    fetch("http://localhost:4000/bookList")
      .then((res) => res.json())
      .then((data) => {
        dispatch(addBooks(data));
        const allWriter = [
          "All",
          ...new Set(data.map((item) => item.writer, "All")),
        ];
        setButtons(allWriter);
        setMenuItem(data);
      });
  }, [dispatch]);

  return (
    <main className="container mx-auto">
      <div className="flex justify-center my-10">
        <TextField
          label="Search"
          InputProps={{
            type: "search",
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-80 md:w-96 my-10"
        />
      </div>
      <div className="container mx-auto px-2 flex flex-wrap justify-evenly">
        {buttons.map((item, index) => (
          <div className="mx-3 mb-3" key={index}>
            <Button
              variant="contained"
              onClick={() => filter(item)}
              className="focus:bg-gray-900"
            >
              {item}
            </Button>
          </div>
        ))}
      </div>
      <div className="container justify-items-center gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {menuItem
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
            <div className="" key={book._id}>
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
                  <Button size="small" onClick={() => dispatch(addFavorite({name: book.name, price: book.price, writer:book.writer, img: book.img}))}>Add To Favorite</Button>
                </CardActions>
              </Card>
            </div>
          ))}
      </div>
    </main>
  );
};

export default BookList;

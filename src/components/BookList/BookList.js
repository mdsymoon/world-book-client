import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks, getBookList } from "../../redux/BookList/BookListSlice";

const BookList = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const bookList = useSelector(getBookList);

  const [menuItem, setMenuItem] = useState(bookList);
  const [buttons, setButtons] = useState([]);
  console.log(buttons);

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
        const allWriter = ["All", ...new Set(data.map((item) => item.writer))];
        setButtons(allWriter);
        setMenuItem(data)
        // dispatch(addWriter(allWriter));
      });
  }, [dispatch]);

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
      <div className="flex justify-center gap-14">
        {
          buttons.map(item => <Button variant="contained" onClick={() =>filter(item)}>{item}</Button>)
        }
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

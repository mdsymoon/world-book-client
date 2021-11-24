import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks, getBookList } from "../../redux/BookList/BookListSlice";
import { getLoggedInUser } from "../../redux/UserLogin/UserLoginSlice";

const BookList = ({ setFavDrawerOpen }) => {
  const dispatch = useDispatch();
  const isLogged = useSelector(getLoggedInUser);
  const bookList = useSelector(getBookList);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuItem, setMenuItem] = useState(bookList);
  const [buttons, setButtons] = useState([]);
  const [alert, setAlert] = useState(false);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(bookList);
      return;
    }
    const filteredData = bookList.filter((item) => item.writer === button);
    setMenuItem(filteredData);
  };

  const fetchBookList = async () => {
    const response = await axios
      .get("http://localhost:4000/bookList")
      .catch((err) => {
        console.log("err", err);
      });
    if (response !== undefined) {
      dispatch(addBooks(response.data));
      const allWriter = [
        "All",
        ...new Set(response.data.map((item) => item.writer, "All")),
      ];
      setButtons(allWriter);
      setMenuItem(response.data);
    }
  };

  useEffect(() => {
    fetchBookList();
  }, []);

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };

  const handleFav = (book) => {
    const favItem = {
      name: book.name,
      writer: book.writer,
      price: book.price,
      img: book.img,
      email: isLogged.email,
    };
    fetch("http://localhost:4000/addToFav", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favItem),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

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
      <div className="container  justify-items-center gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
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
                  {isLogged.email ? (
                    <Button
                      size="small"
                      onClick={() => {
                        setFavDrawerOpen(true);
                        handleFav(book);
                      }}
                    >
                      Add To Favorite
                    </Button>
                  ) : (
                    <Button size="small" onClick={() => setAlert(true)}>
                      Add To Favorite
                    </Button>
                  )}
                </CardActions>
              </Card>
            </div>
          ))}
      </div>
      <div className="">
        <Snackbar
          open={alert}
          autoHideDuration={3000}
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity="error" onClose={handleCloseAlert}>
            please log in
          </Alert>
        </Snackbar>
      </div>
    </main>
  );
};

export default BookList;

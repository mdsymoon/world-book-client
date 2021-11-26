import React, { useEffect, useState } from "react";
import { getLoggedInUser } from "../../redux/UserLogin/UserLoginSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { GrClose } from "react-icons/gr";
import FavSkeletonCard from "../SkeletonCard/FavSkeletonCard";
import { setDrawerOpen } from "../../redux/Drawer/DrawerSlice";

const FavoriteDrawer = () => {
  const [favList, setFavList] = useState([]);
  const isLogged = useSelector(getLoggedInUser);
  const [dataLoad, setDataLoad] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://world-book-1.herokuapp.com/favData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: isLogged.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setFavList(data);
        setDataLoad(false);
      });
  });

  const handleRemove = (_id) => {
    fetch("https://world-book-1.herokuapp.com/deleteFav", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id }),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  return (
    <main className="w-screen sm:w-80 md:w-96 ">
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold my-5">My Favorite Book List</h1>
        <button
          className="text-2xl ml-5 rounded-full"
          onClick={() => dispatch(setDrawerOpen())}
        >
          <GrClose className="text-2xl" />
        </button>
      </div>

      <div className="border-t-4 border-gray-500 pt-5">
        {!dataLoad ? (
          <div>
            {favList.map((item , index) => (
              <div className="m-4" key={index}>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 131 }}
                    image={`data:image/png;base64,${item.img.img}`}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography variant="p">
                        <h3 className="font-semibold">{item.name}</h3>
                      </Typography>

                      <p className="text-base">By {item.writer}</p>
                      <button
                        className="bg-red-700 text-white font-semibold px-3 py-1 mt-3  mr-5 rounded-md flex hover:bg-red-800 transition duration-500"
                        onClick={() => handleRemove(item._id)}
                      >
                        Remove
                      </button>
                    </CardContent>
                  </Box>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center p-4">
            <FavSkeletonCard />
          </div>
        )}
      </div>
    </main>
  );
};

export default FavoriteDrawer;

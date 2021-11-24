import React, { useEffect, useState } from "react";
import { getLoggedInUser } from "../../redux/UserLogin/UserLoginSlice";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

const FavoriteDrawer = () => {
  const [favList, setFavList] = useState([]);
  const isLogged = useSelector(getLoggedInUser);

  useEffect(() => {
    fetch("http://localhost:4000/favData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: isLogged.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setFavList(data);
      });
  });

  return (
    <main style={{ minWidth: 350 }}>
      <div className="">
        <div className="">
          {favList.map((item) => (
            <div className="m-4">
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 131 }}
                  image={`data:image/png;base64,${item.img.img}`}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography  variant="p">
                     <h3 className="font-semibold">{item.name}</h3>
                    </Typography>
                    
                      <p className="text-base">By {item.writer}</p>
                      <button className="bg-red-700 text-white font-semibold px-3 py-1 mt-3  mr-5 rounded-md flex hover:bg-red-800 transition duration-500">Remove</button>
                  </CardContent>
                </Box>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FavoriteDrawer;

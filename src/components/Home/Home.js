import { Drawer } from "@mui/material";
import React, { useState } from "react";
import BookList from "../BookList/BookList";
import FavoriteDrawer from "./../DrawerContainer/FavoriteDrawer";

const Home = () => {
  const [favDrawerOpen, setFavDrawerOpen] = useState(false);
 
  return (
    <div>
      <BookList setFavDrawerOpen={setFavDrawerOpen} />
      <Drawer
        anchor="right"
        open={favDrawerOpen}
        onClose={() => setFavDrawerOpen(false)}
      >
        <FavoriteDrawer setFavDrawerOpen={setFavDrawerOpen}/>
      </Drawer>
    </div>
  );
};

export default Home;

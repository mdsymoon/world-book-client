import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDrawer, setDrawerOpen } from "../../redux/Drawer/DrawerSlice";
import FavoriteDrawer from "../DrawerContainer/FavoriteDrawer";
import NavBar from "../NavBar/NavBar";
import DrawerContainer from "./../DrawerContainer/DrawerContainer";

const Header = () => {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const isDrawer = useSelector(getDrawer);
  const dispatch = useDispatch();
  return (
    <div>
      <NavBar setLeftDrawerOpen={setLeftDrawerOpen} />

      <Drawer
        anchor="left"
        open={leftDrawerOpen}
        onClose={() => setLeftDrawerOpen(false)}
      >
        <DrawerContainer />
      </Drawer>
      <Drawer
        anchor="right"
        open={isDrawer}
        onClose={() => dispatch(setDrawerOpen())}
      >
        <FavoriteDrawer />
      </Drawer>
    </div>
  );
};

export default Header;

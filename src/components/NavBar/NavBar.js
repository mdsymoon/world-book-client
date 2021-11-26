import React from "react";
import { IconButton, Typography } from "@mui/material";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineLogin } from "react-icons/ai";
import { BsCartDashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "../../redux/UserLogin/UserLoginSlice";
import { setDrawerOpen } from "../../redux/Drawer/DrawerSlice";

const NavBar = ({ setLeftDrawerOpen }) => {
  const isLogged = useSelector(getLoggedInUser);
  const dispatch = useDispatch();
  return (
    <nav className="h-14">
      <div className="bg-gray-500 flex items-center border-b fixed w-full z-10 h-14">
        <IconButton
          size="large"
          edge="start"
          aria-label="open drawer"
          sx={{ mx: { xs: 0, md: 2 } }}
          onClick={() => setLeftDrawerOpen(true)}
        >
          <HiMenuAlt2 color="white" />
        </IconButton>
        <Typography noWrap variant="h6" component="div" sx={{ ml: 2, flex: 1 }}>
          <Link to="/" className="text-white">
            World BooK
          </Link>
        </Typography>
        {isLogged.email ? (
          <div className="flex items-center">
            <img
              src={isLogged.userImg}
              alt=""
              className="w-8 rounded-full mr-4"
            />
            <IconButton onClick={() => dispatch(setDrawerOpen())}>
              <BsCartDashFill color="white" />
            </IconButton>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-gray-300 text-blue-600 font-semibold px-3 py-1 mr-5 rounded-lg flex hover:bg-white transition duration-500">
              <AiOutlineLogin style={{ fontSize: 25, marginRight: 5 }} />
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

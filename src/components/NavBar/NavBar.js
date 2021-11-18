import React from "react";
import {IconButton, Typography } from "@mui/material";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBar = ({ setDrawerOpen }) => {
  return (
    <nav className="h-14">
      <div className="bg-indigo-400 flex items-center border-b fixed w-full z-10 h-14">
        <IconButton
          size="large"
          edge="start"
          aria-label="open drawer"
          sx={{ mx: { xs: 0, md: 2 } }}
          onClick={() => setDrawerOpen(true)}
        >
          <HiMenuAlt2 color="#000" />
        </IconButton>
        <Typography
          noWrap
          variant="h6"
          component="div"
          sx={{ ml: 2,  flex: 1 }}
        >
          <Link to="/">World BooK</Link>
        </Typography>
      </div>
    </nav>
  );
};

export default NavBar;

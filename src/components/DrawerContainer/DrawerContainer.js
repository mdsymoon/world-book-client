import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { AiFillFolderAdd } from "react-icons/ai";

const DrawerContainer = ({setLeftDrawerOpen}) => {
  const [open, setOpen] = useState(false);

  return (
    <main style={{ minWidth: 300 }}>
      <h3 className="text-2xl text-center font-semibold mt-3 px-5 ">
        World Book
      </h3>
      <div className="mt-8 pl-5 border-t-4 ">
        <Link to="/">
          <div className="flex mt-5 cursor-pointer" onClick={() => setLeftDrawerOpen(false)}>
            <FaHome style={{ fontSize: 30 }} />
            <p className="text-xl ml-2 font-semibold">Home</p>
          </div>
        </Link>

        <div className="mt-5">
          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemText>Dashboard</ListItemText>
            <div className="ml-2">
              {open ? <MdExpandMore /> : <MdExpandLess />}
            </div>
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List>
              <Link to="/addBook">
                <ListItemButton onClick={() => setLeftDrawerOpen(false)}>
                  <AiFillFolderAdd style={{ fontSize: 30, marginRight: 10 }} />
                  AddBook
                </ListItemButton>
              </Link>
              <Link to="/bookData">
                <ListItemButton onClick={() => setLeftDrawerOpen(false)}>
                  <AiFillFolderAdd style={{ fontSize: 30, marginRight: 10 }} />
                  Book Data
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </div>
      </div>
    </main>
  );
};

export default DrawerContainer;

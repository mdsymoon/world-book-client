import React, { useState } from "react";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { useSelector } from 'react-redux';
import { getFavItem } from "../../redux/FavoriteList/FavoriteSlice";

const FavoriteDrawer = () => {
  const favItem = useSelector(getFavItem);
  return (
    <main style={{ minWidth: 300 }}>
      <div className="">
        <div className="">
          {favItem.map(item => <h5>{item.name}</h5>)}
        </div>
      </div>
    </main>
  );
};

export default FavoriteDrawer;

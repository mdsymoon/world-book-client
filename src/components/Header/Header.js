import { Drawer } from '@mui/material';
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import DrawerContainer from './../DrawerContainer/DrawerContainer';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <div>
            <NavBar setDrawerOpen={setDrawerOpen}/>
            
            <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
          <DrawerContainer setDrawerOpen={setDrawerOpen}/>
      </Drawer>
        </div>
    );
};

export default Header;
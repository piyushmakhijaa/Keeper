import React from "react";
import Zoom from '@mui/material/Zoom';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
function Header() {
  return (
    <Zoom in={true}>
    <header>
      <h1><WbIncandescentIcon className="bulb"/>Keeper</h1>
    </header>
    </Zoom>
  );
}

export default Header;

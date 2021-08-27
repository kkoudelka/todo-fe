/* eslint-disable @next/next/no-img-element */
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Appbar: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar className="container">
        <Typography
          variant="h6"
          component="div"
          // sx={{ flexGrow: 1 }}
          className="pointer"
        >
          Todo List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

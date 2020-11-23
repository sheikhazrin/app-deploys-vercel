import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Box,
  Container,
  Slide
} from "@material-ui/core";

import { NavLink, Link, Route } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};
const NavBar = (props) => {
  return (
    <>
      <React.Fragment>
        <CssBaseline />{" "}
        <HideOnScroll {...props}>
          {" "}
          <AppBar>
            <Toolbar>
              <Typography variant="h6">Scroll to Hide App Bar</Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />{" "}
        <Container>
          {" "}
          <Box my={2}>
            {[...new Array(12)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
};

export default NavBar;

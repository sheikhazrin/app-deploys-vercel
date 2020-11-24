import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton
  // Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import clsx from "clsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
  root: {},
  flexGrow: {
    flexGrow: 1
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2)
  },
  listItem: {
    cursor: "pointer",
    paddingTop: 0,
    paddingBottom: 0
  },
  listItemText: {
    flex: "0 0 auto",
    whiteSpace: "nowrap",
    textDecoration: "none"
  },
  listItemButton: {
    whiteSpace: "nowrap"
  },
  iconButton: {
    padding: 0,
    "&:hover": {
      background: "transparent"
    }
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up("md")]: {
      width: 120,
      height: 32
    }
  },
  logoImage: {
    width: "100%",
    height: "100%"
  },
  dBlock: {
    display: "block"
  }
}));

const Image = (props) => {
  const { src, srcSet, alt, lazy, lazyProps, className, ...rest } = props;

  const classes = useStyles();
  if (lazy) {
    return (
      <LazyLoadImage
        className={clsx("image", classes.root, classes.dBlock, className)}
        alt={alt}
        src={src}
        srcSet={srcSet}
        effect="opacity"
        {...lazyProps}
        {...rest}
      />
    );
  }

  return (
    <img
      className={clsx("image", classes.root, className)}
      alt={alt}
      src={src}
      srcSet={srcSet}
      {...rest}
    />
  );
};

Image.defaultProps = {
  alt: "...",
  lazy: true,
  lazyProps: {
    width: "auto",
    height: "auto"
  }
};

Image.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Source of the image
   */
  src: PropTypes.string.isRequired,
  /**
   * Source set for the responsive images
   */
  srcSet: PropTypes.string,
  /**
   * Image title
   */
  alt: PropTypes.string,
  /**
   * Should lazy load the image
   */
  lazy: PropTypes.bool
};

const Topbar = (props) => {
  const { onSidebarOpen, pages, ...rest } = props;
  const classes = useStyles();

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="thefront">
          <Image
            className={classes.logoImage}
            src="../assets/logos.svg"
            alt="thefront"
            lazy={false}
          />
        </a>
      </div>
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List className={classes.navigationContainer}>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/"
            >
              Home
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/login"
            >
              Sign up
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              href="/not-found"
              component="a"
            >
              Error Page
            </Typography>
          </ListItem>
          {/* <ListItem className={classes.listItem}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => loginWithRedirect()}
              className={classes.listItemButton}
            >
              Full Product
            </Button>
          </ListItem> */}
        </List>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

export default Topbar;

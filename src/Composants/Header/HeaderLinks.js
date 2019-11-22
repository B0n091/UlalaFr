/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Classes"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Druides
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Chamans
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Assassins
            </Link>,                      
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
      <CustomDropdown
          noLiPadding
          buttonText="Familier"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/familier" className={classes.dropdownLink}>
              Tutoriel
            </Link>,
            <Link to="/ulaladex" className={classes.dropdownLink}>
              UlalaDex
            </Link>,                      
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/Cartes" >
        <Button
        href="#"
          color="transparent"
          className={classes.navLink}
        >
          Cartes
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="Discord"
          title="Rejoinds notre discord"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://discord.io/UlalaFR"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-discord"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

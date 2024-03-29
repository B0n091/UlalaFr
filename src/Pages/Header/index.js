import React from 'react';

// nodejs library that concatenates classes
//import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../Composants/Header/Header.js";
// import Footer from "Composants/Footer/Footer.js";
import GridContainer from "../../Composants/Grid/GridContainer.js";
import GridItem from "../../Composants/Grid/GridItem.js";
//import Button from "../../Composants/CustomButtons/Button.js";
import HeaderLinks from "../../Composants/Header/HeaderLinks.js";
import Parallax from "../../Composants/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/components.js";

// Sections for this page
// import ProductSection from "./Sections/ProductSection.js";
// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";

//const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Ulala France"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("../../assets/img/UlalaFond.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Ulala France</h1>
                <h3 className={classes.subtitle}>
                  Bienvenue sur le site communautaire d'Ulala
                </h3>
                <h3 className={classes.subtitle}>Vous retrouverez ici divers tutoriels</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
}
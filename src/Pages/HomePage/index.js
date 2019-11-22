import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-react/views/components.js";

import HeaderPage from "../Header"
import Footer from "../../Composants/Footer/Footer"
import Acceuil from "../Acceuil"
import FamilierPage from "../Familier/index.js";
import CartePage from "../Cartes/index.js";
import UlalaDex from "../Familier/ulaladex.js";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const pages = (
    <Switch>
      <Route exact path="/" component={Acceuil}/>
      <Route path="/classe" component={Acceuil} />
      <Route path="/familier" component={FamilierPage} />
      <Route path="/cartes" component={CartePage} />
      <Route path="/ulaladex" component={UlalaDex} />
    </Switch>
  )
  return (
    <div>
      <Router>
      <HeaderPage />
      <div className={classNames(classes.main, classes.mainRaised)}>
        {pages}
      </div>
        <Footer />
      </Router>
    </div>
  );
}
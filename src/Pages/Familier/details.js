import React, {} from 'react';

import Button from "../../Composants/CustomButtons/Button.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

import "./style.css"




const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function PetDetails(props) {

    const classes = useStyles();

    const [classicModal, setClassicModal] = React.useState(false);
    const pet = props.pet

    //let imgDetails = require("../../assets/img/pet/" + pet.nom + "Details.PNG")
    
    let dPet = <div>
    <img 
    color="primary"
    className="imgDetail"
    //block
    key={pet.numéro}
    src={require("../../assets/img/pet/" + pet.nom + "Details.PNG")}
    //src={require("../../assets/img/pet/" + pet.nom + "Logo.PNG")}
    alt={pet.nom}
    //onClick={() => setClassicModal(true)}
  />
   { /*<Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                <h4 className={classes.modalTitle}>{props.pet.nom}</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                       <img className="petDetails" src={imgDetails}  alt={props.pet.nom} />
                  </DialogContent>
                </Dialog> */}
                </div>

  return (
      <div>
        {dPet}
      </div>
  );
}
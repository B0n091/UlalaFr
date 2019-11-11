import React, { Component } from 'react';

import listRegions from "./regions"
import listCartes from './cartes';
import listTypes from './types';

//import "./style.css"


class CartePage extends Component {

  render () {

    console.log(listRegions, listCartes, listTypes)
    let dListCartes = <div>
        {listCartes.map(carte =>(
            <div>
                <img src={require("../../assets/img/cartes/" + carte.nom + ".png")} />
                {carte.nom}
            </div>
        ))}
    </div>
  return (
    <div>
        {dListCartes}
     </div>
  );
}
}

export default CartePage;
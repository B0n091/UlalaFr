import React, { Component } from 'react';
import FamilierSection from '../../Composants/Familier/Section';

class FamilierPage extends Component {

  render () {


  return (
    <div>
        <h1 className="titleFamilierPage">Les familiers</h1>
        <FamilierSection Img="TresTalentueux1.png" title="Qu'est-ce qu'un Familier Talentueux  ?" subTitle="" Description="C'est un familier étant à son potentiel d'aptitudes maximal possible.
De Plus il se distingue visuellement avec une bordure dorée sur son élément principal, et le titre des statistiques écrites en dorées aussi . (voir image en dessous) "/>
    </div>
  );
}
}

export default FamilierPage;
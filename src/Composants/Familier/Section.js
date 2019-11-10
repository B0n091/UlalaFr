import React, { Component } from 'react';
import PropTypes from 'prop-types'

import "./style.css"

class FamilierSection extends Component {

  render () {


  return (
    <div>
        <div className="leftSide">
            <img src={require("../../assets/img/" + this.props.Img)} alt={this.props.Img}/>
        </div>
        <div className="rightSide">
            <h2>{this.props.title}</h2>
            <h3>{this.props.subTitle}</h3>
            <p>{this.props.Description}</p>
        </div>
    </div>
  );
}
}

FamilierSection.propTypes = {
    Img: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    Description: PropTypes.string
  };

export default FamilierSection;
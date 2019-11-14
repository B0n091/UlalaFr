import React, { Component } from 'react';

import listRegions from "./regions"
import listCartes from './cartes';
import listTypes from './types';

import "./style.css"


class CartePage extends Component {

  constructor(props){
    super(props)

    this.state = {
      deckList : [],      
        "ATQ" : 0,
        "ARMURE" : 0,
        "PV" : 0,
        "Perforation" : 0,
        "CRIT" : 0,
        "Ténacité" : 0,
      stateListTypes : listTypes,
      stateListRegions : listRegions
    }
  }

  handleClick = (carte) => {
    let bonus = carte.bonus[2].split('-')
    let types = this.state.stateListTypes
    let regions = this.state.stateListRegions
    
    console.log(this.state.deckList.find(function(element){return element.nom === carte.nom}))
    if(this.state.deckList.length < 9 && !this.state.deckList.find(function(element){return element.nom === carte.nom})){
    this.setState({
      [bonus[0].split(' ')[0]] : this.state[bonus[0].split(' ')[0]] + parseInt(bonus[0].split('+')[1])
    })
    if(bonus[1]){
      this.setState({
        [bonus[1].split(' ')[0]] : this.state[bonus[1].split(' ')[0]] + parseInt(bonus[1].split('+')[1])
      })
    }
    console.log(carte.nom)
    console.log(types)
    types[carte.types[0]].Nombre++
    regions[carte.regions[0]].Nombre++
    if(carte.regions[1]){
      console.log(carte.regions[1])
      regions[carte.regions[1]].Nombre++
    }
    this.setState(prevState => ({
      deckList : [...prevState.deckList, carte],
    }))}
    console.log(this.state)
  }

  handleRemove = (carte) => {
    let bonus = carte.bonus[2].split('-')
    let types = this.state.stateListTypes
    let regions = this.state.stateListRegions
    let newDeckList = this.state.deckList.filter(deckCarte => deckCarte.nom !== carte.nom)
    console.log(newDeckList)
    this.setState({
      [bonus[0].split(' ')[0]] : this.state[bonus[0].split(' ')[0]] - parseInt(bonus[0].split('+')[1])
    })
    if(bonus[1]){
      this.setState({
        [bonus[1].split(' ')[0]] : this.state[bonus[1].split(' ')[0]] - parseInt(bonus[1].split('+')[1])
      })}
      types[carte.types[0]].Nombre--
      regions[carte.regions[0]].Nombre--
      if(carte.regions[1]){
        regions[carte.regions[1]].Nombre--
      }
    this.setState({
      deckList : newDeckList
    })

  }

  render () {

    console.log("--", this.state.stateListRegions)
    console.log(this.state.stateListTypes)
    let listTypesBonus = <div className="listBonusTypes">
      {Object.keys(this.state.stateListTypes).map(type =>(<div className="bonusEffect">
          {this.state.stateListTypes[type].Nombre >= this.state.stateListTypes[type].nbBonus && 
          <div> <b>{this.state.stateListTypes[type].nom}({Math.trunc(this.state.stateListTypes[type].Nombre / this.state.stateListTypes[type].nbBonus)}) : </b>{this.state.stateListTypes[type].Bonus[Math.trunc(this.state.stateListTypes[type].Nombre / this.state.stateListTypes[type].nbBonus -1)]}: </div>}
      </div>))}
      {Object.keys(this.state.stateListRegions).map(type =>(<div className="bonusEffect">
          {this.state.stateListRegions[type].Nombre >= this.state.stateListRegions[type].nbBonus && 
          <div> <b>{this.state.stateListRegions[type].nom}({Math.trunc(this.state.stateListRegions[type].Nombre / this.state.stateListRegions[type].nbBonus)}) : </b>{this.state.stateListRegions[type].Bonus[Math.trunc(this.state.stateListRegions[type].Nombre / this.state.stateListRegions[type].nbBonus -1)]}: </div>}
      </div>))}
    </div>
    let deckList = <div className="contentDeckList"> 
      {this.state.deckList.map(carte =>(
            <div className="deckCarte" onClick={() => this.handleRemove(carte)}>
                <img src={require("../../assets/img/cartes/" + carte.nom + ".png")} alt={carte.nom}/>
      </div>))}
      </div>
    let dListCartes = <div className="contentCartesList">
        {listCartes.map(carte =>(
            <div className="carte" onClick={() => this.handleClick(carte)}>
                <img src={require("../../assets/img/cartes/" + carte.nom + ".png")} alt={carte.nom} />
            </div>
        ))}
    </div>
  return (
    <div className="divCarte">
      <div className="divCartesList">
      <h1>Liste des cartes</h1>
        {dListCartes}
      </div>
      <div className="divDeckList">
      <h1>Deck</h1>
      <div className="maxDeckList">
      {deckList}
      <div className="divDeckBonus">
        <div className="deckBonusLeft">
          Ataque : {this.state["ATQ"]} <br />
          Armure : {this.state["ARMURE"]}<br />
          PV : {this.state["PV"]}<br />
        </div>
        <div className="deckBonusRight">
          Perforation : {this.state["Perforation"]}<br />
          Critique :  {this.state["CRIT"]}<br />
          Ténacité :  {this.state["Ténacité"]}<br />
        </div>
      </div>
      <div className="divTypeRegionBonus">
      {listTypesBonus}
      </div>
      </div>
      </div>
     </div>
  );
}
}

export default CartePage;
import React, { Component } from 'react';
import "./ulaladex.css"
import listFamiliers from './familiers';
import PetDetails from './details';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function UlalaDex() {

  const classes = useStyles();
  const [value, setValue] = React.useState('Aucun');
  const [value2, setValue2] = React.useState('Aucun');
  const [lvl1, setLvl] = React.useState(0);
  const [lvl2, setLvl2] = React.useState(0);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleChange2 = event => {
    console.log(value)
    if (value !== event.target.value || value == "Aucun"){
    setValue2(event.target.value);}
  };

  const handleChangeLvl1 = event => {
    setLvl(event.target.value);
    if(event.target.value != 0){
      setLvl2(10 - event.target.value)}
    else if(event.target.value == 0){
      setLvl2(event.target.value)}
  };

  const handleChangeLvl2 = event => {
    setLvl2(event.target.value);
    if(event.target.value != 0){
    setLvl(10 - event.target.value)}
    else if(event.target.value == 0){
      setLvl(event.target.value)}
  };

  let cListFamilier = listFamiliers  

 let dListFamilier = <div className="listFamiliers">
   {cListFamilier.map(function(familier){
     if (((value == "Aucun" || (familier.element.split("-")[0].split(":")[0] == value && (lvl1 == 0 || familier.element.split("-")[0].split(":")[1] == lvl1)) 
                            || (familier.element.split("-")[familier.element.split("-").length - 1].split(":")[0] == value && (lvl1 == 0 ||familier.element.split("-")[familier.element.split("-").length - 1].split(":")[1] == lvl1 )))) 
            && ((value2 == "Aucun"  || (familier.element.split("-")[0].split(":")[0] == value2 && (lvl2 == 0 || familier.element.split("-")[0].split(":")[1] == lvl2))
                                  || familier.element.split("-")[familier.element.split("-").length - 1].split(":")[0] == value2 && (lvl2 == 0 || familier.element.split("-")[familier.element.split("-").length - 1].split(":")[1] == lvl2 )))) 
          {
if (familier.nom != "???"){
     return (<div className="familier">
               <PetDetails pet={familier} />
     </div>)}}
     return
     }
   )}
</div>

  return (
    <div className="ulalaDex">
      <h1>UlalaDex</h1>
      <div className="Filter">
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Element</FormLabel>
        <RadioGroup aria-label="Element" name="Element1" value={value} onChange={handleChange}>
          <FormControlLabel value="Feu" control={<Radio />} label="Feu" />
          <FormControlLabel value="Foudre" control={<Radio />} label="Foudre" />
          <FormControlLabel value="Terre" control={<Radio />} label="Terre" />
          <FormControlLabel value="Givre" control={<Radio />} label="Givre" />
          <FormControlLabel value="Aucun" control={<Radio />} label="Aucun" />
        </RadioGroup>
        <FormLabel component="legend">Niveau</FormLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lvl1}
          onChange={handleChangeLvl1}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={0}>Aucun</MenuItem>
        </Select>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Element</FormLabel>
        <RadioGroup aria-label="Element" name="Element2" value={value2} onChange={handleChange2}>
        <FormControlLabel value="Feu" control={<Radio />} label="Feu" />
          <FormControlLabel value="Foudre" control={<Radio />} label="Foudre" />
          <FormControlLabel value="Terre" control={<Radio />} label="Terre" />
          <FormControlLabel value="Givre" control={<Radio />} label="Givre" />
          <FormControlLabel value="Aucun" control={<Radio />} label="Aucun" />
        </RadioGroup>
        <FormLabel component="legend">Niveau</FormLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lvl2}
          onChange={handleChangeLvl2}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={0}>Aucun</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
    </div>
      <div className="sectionUlalaDex">
        {dListFamilier}
      </div>
     </div>
  );
}
import './App.css';
import axios from 'axios';
import Races from './components/races';
import React, { useEffect, useState } from "react";
import Header from './components/header'


function App() {

  const showpage = (target, hide1, hide2) => {
    document.getElementById(target).style.display = "block";
    document.getElementById(hide1).style.display = "none";
    document.getElementById(hide2).style.display = "none";
  }

  const [races, setRace] = useState([]);

  ///testestestestestestestestestsetestestes

  const getRaces = () => {
    axios.get('https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=45').then(
        (response)=>{
          setRace(response.data.data.race_summaries);    
        })
  }

  useEffect(() => {
    axios.get('https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=45').then(
    (response)=>{
      setRace(response.data.data.race_summaries); })
  }, []);
  

  return (
    <div className="App">
      <Header click={showpage} getraces={getRaces} />
      <Races racedata={races} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./MyBotarmy";
import '../App.css';

function App() {

  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("https://bot-data-sjme.onrender.com/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.log(error));
  }, []);

  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const dischargeBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };


  const deleteBot = (bot) => {
    fetch(`https://bot-data-sjme.onrender.com/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setArmy(army.filter((b) => b.id !== bot.id));
        setBots(bots.filter((b) => b.id !== bot.id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>Bot-O-Mat</h1>
      <h2>Bot Collection</h2>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <h2>Your Bot Army</h2>
      <YourBotArmy army={army} dischargeBot={dischargeBot} deleteBot={deleteBot} />
    </div>
  );



}

export default App;
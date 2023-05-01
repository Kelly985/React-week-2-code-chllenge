import React from "react";

function YourBotArmy({ army, dischargeBot, deleteBot }){

  return (
    <div className="your-bot-army">
      {army.map((bot) => (
        <div key={bot.id} className="bot-card">
          <div className="bot-info">
            <img src={bot.avatar_url} alt={`${bot.name}'s avatar`} />
            <div className="bot-details">
              <h3>{bot.name}</h3>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Class: {bot.bot_class}</p>
            </div>
          </div>
          <div className="bot-buttons">
            <button onClick={() => dischargeBot(bot)}>Discharge</button>
            <button onClick={() => deleteBot(bot)}>x</button>
          </div>
        </div>
      ))}
    </div>
  );

}


export default YourBotArmy;

import React from "react";

function BotCollection({ bots, enlistBot }) {

  return (
    <div>
      {bots.map((bot) => (
        <div key={bot.id} className="bot">
          <h3>{bot.name}</h3>
          <img src={bot.avatar_url} alt={`${bot.name}'s avatar`} />
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <button onClick={() => enlistBot(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );

}
  
  export default BotCollection;
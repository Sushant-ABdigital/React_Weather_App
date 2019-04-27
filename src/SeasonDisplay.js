import React from "react";
import './SeasonDisplay.css'
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const seasonConfig = {
  Summer: {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  Winter: {
    text: 'Burr It is chilli',
    iconName: 'snowflake'
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const  {text, iconName} = seasonConfig[season];
  console.log(text);
  return (
    <div className= {`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`}></i>
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`}></i>
    </div>
  );
};

export default SeasonDisplay;
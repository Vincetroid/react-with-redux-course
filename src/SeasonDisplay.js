import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Vamo a la playa",
        iconName: 'sun'
    },
    winter: {
        text: 'Hace frio!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        //entre marzo y agosto
        return lat > 0 ? 'summer' : 'winter';
    } else {
        //entre sept y febrero
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;
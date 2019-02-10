import React from 'react';
import {availableKeys} from './DrumSounds';


export const Drum_Pad = props => {
    return <button className="drum-pad" onClick={props.onClick} id={availableKeys[props.value.toLowerCase()]} value={props.value} style={props.style}>
            {props.value}
            <audio className="clip" id={props.value} type="audio/mpeg" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
        </button>
}  

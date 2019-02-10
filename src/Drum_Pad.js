import React from 'react';
import {availableKeys} from './DrumSounds';


export const Drum_Pad = props => {
    const drumName = availableKeys[props.value].name;
    const drumSource = availableKeys[props.value].source;
    return <button className="drum-pad" onClick={props.onClick} id={drumName} value={props.value} style={props.style}>
            {props.value}
            <audio className="clip" id={props.value} type="audio/mpeg" src={drumSource}/>
        </button>
}  

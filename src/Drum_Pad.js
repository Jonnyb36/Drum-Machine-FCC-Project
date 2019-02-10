import React from 'react';

export const Drum_Pad = props => {
    return <button className="drum-pad" onClick={props.onClick} id={props.id} value={props.value} style={props.style}>
            {props.value}
            <audio className="clip" id={props.value} src="horse.mp3">
                <source  type="audio/mpeg" />
            </audio>
        </button>
}  

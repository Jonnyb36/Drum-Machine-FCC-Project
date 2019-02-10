import React from 'react';
import {Row, Col} from 'reactstrap';
import {Drum_Pad} from './Drum_Pad';

export const DrumMachineBody = props => {
    //create a grid for all numbers
    return <>
            <Row noGutters>
                <Col>
                    <Row noGutters> 
                        <Col xs="4">
                            <Drum_Pad id="one" value="Q" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Drum_Pad id="two" value="W" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Drum_Pad id="three" value="E" onClick={props.onClick} />
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col xs="4">
                            <Drum_Pad id="four" value="A" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Drum_Pad id="five" value="S" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Drum_Pad id="six" value="D" onClick={props.onClick} />
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col xs="4">
                            <Drum_Pad id="seven" value="Z" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Drum_Pad id="eight" value="X" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Drum_Pad id="nine" value="C" onClick={props.onClick} />
                        </Col>
                    </Row>
                </Col>
            </Row> 
        </>
}  

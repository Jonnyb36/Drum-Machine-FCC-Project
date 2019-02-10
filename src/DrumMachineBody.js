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
                            <Drum_Pad value="Q" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Drum_Pad value="W" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Drum_Pad value="E" onClick={props.onClick} />
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col xs="4">
                            <Drum_Pad value="A" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Drum_Pad value="S" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Drum_Pad value="D" onClick={props.onClick} />
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col xs="4">
                            <Drum_Pad value="Z" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Drum_Pad value="X" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Drum_Pad value="C" onClick={props.onClick} />
                        </Col>
                    </Row>
                </Col>
            </Row> 
        </>
}  

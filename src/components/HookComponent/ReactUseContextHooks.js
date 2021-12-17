import {React,useState,createContext} from 'react';
import * as Spaces from 'react-spaces';
import {Card} from 'react-bootstrap';
import Component1 from './UseContextComponent/Component1';
import Component3 from './UseContextComponent/Component3';
export const UserContext = createContext();
function ReactUseContext() {
    const color1 = {background: "#84DFFF" };
    const color2 = {background: "#516BEB" };
    const [name] = useState("Marvic");
    const [date] = useState("12/17/2021");
    return (
        <Spaces.Fill>
            <Spaces.LeftResizable style={color1} size="50%">
            <Spaces.Centered>
                <Card style={{ width: '50%', margin: 'auto' }}>
                    <Card.Header as="h5">Use Context Hook</Card.Header>
                    <Card.Body>
                        <Card.Title>Hi this is {name}</Card.Title>
                        <Card.Text>
                            <Component1 name={name}/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Spaces.Centered>
            </Spaces.LeftResizable>
            <Spaces.RightResizable style={color2} size="50%">
            <Spaces.Centered>
                <Card style={{ width: '60%', margin: 'auto' }}>
                    <Card.Header as="h5">Use Context Hook (Another Way)</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <UserContext.Provider value={date}>
                                <h5>This is the date today {date}</h5>
                                <Component3 />
                            </UserContext.Provider>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Spaces.Centered>
            </Spaces.RightResizable>
        </Spaces.Fill>
    );
};
export default ReactUseContext;
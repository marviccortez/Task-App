import { React, useState } from 'react';
import * as Spaces from 'react-spaces';
import { Card, Button } from 'react-bootstrap';

function ReactHooks() {
    const [counterState, setCounter] = useState(0);
    const color = {background: "#EDD2F3"};

    const incrementCount = (hook) => {
        setCounter(counterState + 1);
    };

    const decrementCount = (hook) => {
        setCounter(counterState - 1);
    };
    return (
        <Spaces.Fill style={color}>
            <Spaces.Centered>
                <Card style={{ width: '50%', margin: 'auto' }}>
                    <Card.Header as="h5">Use State Hook</Card.Header>
                    <Card.Body>
                        <Card.Title>Counter</Card.Title>
                        <Card.Text>
                            {counterState}
                        </Card.Text>
                        <Button className='m-1' onClick={decrementCount}>-</Button>
                        <Button className='m-1' onClick={incrementCount}>+</Button>
                    </Card.Body>
                </Card>
            </Spaces.Centered>
        </Spaces.Fill>
    );
}

export default ReactHooks;
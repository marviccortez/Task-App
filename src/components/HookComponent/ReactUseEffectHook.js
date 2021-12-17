import { React, useState, useEffect } from 'react';
import * as Spaces from 'react-spaces';
import { Card, Button } from 'react-bootstrap';

function ReactHooks() {
    const [counterEffect, setCounterEffect] = useState(0);
    const [multiply, setMultiply] = useState(0);
    const color = {background: "#FFFCDC" };

    useEffect(() => {
        setMultiply(() => counterEffect * 2);
    }, [counterEffect]);

    const incrementCount = () => {
        setCounterEffect(counterEffect + 1);
    };

    const decrementCount = () => {
        setCounterEffect(counterEffect - 1);
    };
    return (
        <Spaces.Fill style={color}>
            <Spaces.Centered>
                <Card style={{ width: '50%', margin: 'auto' }}>
                    <Card.Header as="h5">Use Effect Hook</Card.Header>
                    <Card.Body>
                        <Card.Title>Counter</Card.Title>
                        <Card.Text>
                            <p>{counterEffect}</p>
                            <Card.Title>Multiplied By 2</Card.Title>
                            <p>{multiply}</p>
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
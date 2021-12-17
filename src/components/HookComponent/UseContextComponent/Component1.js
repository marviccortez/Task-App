import Component2 from "./Component2";
import {Container} from 'react-bootstrap';

function Component1({name}) {
    return (
        <Container>
            <h5>Component1</h5>
            <Component2 name={name}/>
        </Container>
    );
};

export default Component1;
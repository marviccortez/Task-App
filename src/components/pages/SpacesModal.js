import * as Spaces from 'react-spaces';
import Modal from './Modal';
import { Container } from 'react-bootstrap';


function SpacesDemo() {
    const style = { 
        background: "#F05454",
        size: "25%"
    }
    const styleTB = { background: "#30475E" };

    return (
        <Container>
            <Spaces.LeftResizable size={style.size} style={style}>

            </Spaces.LeftResizable>
            <Spaces.Fill>
                <Spaces.TopResizable size="25%" style={styleTB}>

                </Spaces.TopResizable>
                <Spaces.Fill>
                    <Spaces.Centered>
                        <Modal />
                    </Spaces.Centered>
                </Spaces.Fill>
                <Spaces.BottomResizable size="25%" style={styleTB}>

                </Spaces.BottomResizable>
            </Spaces.Fill>
            <Spaces.RightResizable size="25%" style={style}>

            </Spaces.RightResizable>
        </Container>

    );
}

export default SpacesDemo;
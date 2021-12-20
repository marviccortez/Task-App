import '../App.css';
import { Link } from "react-router-dom";
import * as Spaces from 'react-spaces';
import { Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Spaces.TopResizable size="15%" className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Nav as="ul" className='navbar m-auto navbar-expand-lg navbar-dark bg-dark'>
                <Nav.Item as="li" className='nav-item'>
                    <Link className='nav-link' to="/">Spaces/Modal</Link>
                </Nav.Item>
                <Nav.Item as="li" className='nav-item'>
                    <Link className='nav-link' to="/reactUseEffectHooks">React UseEffects Hooks</Link>
                </Nav.Item>
                <Nav.Item as="li" className='nav-item'>
                    <Link className='nav-link' to="/reactUseContextHooks">React UseContext Hooks</Link>
                </Nav.Item>
            </Nav>
        </Spaces.TopResizable>
    );
}

export default Navigation;
import React from 'react';
import HookUseState from './HookUseState';

class Home extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <h1>Welcome to React Router!</h1>
                    <h2>Welcome to the homepage!</h2>
                    <p>You can do this, I believe in you.</p>
                    <HookUseState />
                </main>
            </div>
        );
    }
}

export default Home;
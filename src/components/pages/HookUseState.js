import {useState} from 'react';

function HookUseState() {
    let [greet, setGreet] = useState("");

    return ( 
        <div>
            <h2>React Hook</h2>
            <h3>{greet}</h3>
            <button onClick={() => setGreet( greet = "Hi!")}>Say Hi!</button>
            <button onClick={() => setGreet( greet = "Hello!")}>Say Hello!</button>
        </div>
     );
}

export default HookUseState;
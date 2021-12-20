import {useContext} from 'react';
import {UserContext} from './ReactUseContextHooks';

function Component3 () {
    const date = useContext(UserContext);
    return (
        <h5>Today is {date}</h5>
    );
   };
   
   export default Component3;
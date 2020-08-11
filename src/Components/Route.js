// Component Routing using pathname values in window.location
// No 'import React' required since no JSX present

    //children - special prop for component passed as content

import {useEffect, useState} from 'react';

const Route = ({path, children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect( () => {

        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }

    }, []);

    return currentPath === path ? children : null;
}

export default Route;
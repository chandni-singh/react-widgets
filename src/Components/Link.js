import React from 'react';

const Link = ({href, className, children}) => {

    const onClick = (event) => {

        if(event.ctrlKey) {
            // default browser behaviour - open link in new Tab
            return;
        }

        event.preventDefault();

        // update URL
        window.history.pushState({}, '' , href);

        //Navigation Event
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);

    };

    return (
        <a  onClick = {onClick} href = {href} className = {className}>{children}</a>
    );

}

export default Link;
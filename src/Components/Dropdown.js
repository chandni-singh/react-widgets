import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({label, options, selected, onSelectedChange}) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    // Closing dropdown when clicked anywhere else in the body except the form
    const onBodyClick = (event) => {
        if(ref.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    }

    useEffect( ()=> {
        document.body.addEventListener('click', onBodyClick);
        // clean up 
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }

    }, []);

    const renderedOptions = options.map( (option) => {

        if (option.value === selected.value) {
            return null;
        }

        return (
            <div className = "item" key = {option.value} onClick = {() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    });

    return (
        <div ref = {ref} className = "ui form">
            <div className = "field">
                <label className = "label">{label}</label>

                <div onClick = {() => setOpen(!open)} 
                     className = {`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className = "dropdown icon"></i>
                    <div className = "text">{selected.label}</div>
                    <div className = {`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>
            {/* <div style = {{color:selected.value}}>The text is <span>{selected.value}</span>!</div> */}
        </div>
    );
}

export default Dropdown;
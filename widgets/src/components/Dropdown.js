import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ label, options, selected, onSelectedChange }) => {

    const [open, setOpen] = useState(false);

    const ref = useRef();

    // Is run only during first load
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick, { capture: true });

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []);

    const renderedOptions = options
        .map((option) => {
            if (option.value === selected.value) {
                return null
            }

            return (
                <div
                    key={option.value}
                    className="item"
                    onClick={() => onSelectedChange(option)}
                >
                    {option.label}
                </div>
            )
        })

    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    onClick={(ev) => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu transition ${open ? 'visible' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;

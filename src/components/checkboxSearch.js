import React from 'react'
import '../style/camera.css'

function CheckboxSearch(props) {
    return (
        <>
        <li key={props.key}>
            <label className='container'>
            <input 
                type="checkbox" 
                className="filter__checkbox" 
                value={props.id}
                onChange={props.function}
                checked={props.checked}
                />
                {props.name}
                <span className='checkmark'></span>
            </label>
        </li>
        </>
    );
}

export default CheckboxSearch;
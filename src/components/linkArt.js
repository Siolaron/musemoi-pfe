import React from 'react'
import { Link } from 'react-router-dom';

function LinkArt(props) {
    return (
        <>
        <li key={props.key} className={props.class}>
            <Link to={props.route} state={{ previousPath: window.location.pathname }}><img src={props.img} alt={props.name} /></Link>
        </li>
        </>
    );
}

export default LinkArt;
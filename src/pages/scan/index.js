import React from 'react'
import { Link } from 'react-router-dom'

function Scan() {
    const route = "/art/0"
    document.querySelector('main')?.classList.remove('art');
    return (
        <>
        <h1>SCAN</h1>
            <Link to={route} state={{ previousPath: window.location.pathname }}>PHOTO</Link>
        </>
    );
}

export default Scan;
import React from 'react'
import { Link } from 'react-router-dom'
import Camera from '../../components/camera';

function Scan() {
    const route = "/art/0"
    document.querySelector('main')?.classList.remove('art');

    return (
        <>
            <Camera route={route} />
        </>
    );
}

export default Scan;
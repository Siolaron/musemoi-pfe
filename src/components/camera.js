import React from 'react'
import { Link } from 'react-router-dom'
import {useEffect, useRef} from "react";
import '../style/camera.css'

function Camera(props) {
    useEffect(() => {
        let video = document.getElementById('video');

        navigator.mediaDevices
        .getUserMedia({ video: 
            {facingMode: { exact: "environment" }}
          , audio: false })
        .then((stream) => {
            console.log(video);
            video.srcObject = stream;
            video.addEventListener('loadeddata', () => {
                video.play();
              });
              video.load();
        })
        .catch((err) => {
            console.error(`Une erreur est survenue : ${err}`);
        });
      });

    return (
        <>
        <div class="camera">
            <video id="video">Le flux vidéo n'est pas disponible.</video>
            <Link to={props.route} state={{ previousPath: window.location.pathname }}><span className='sr-only'>Prendre une photo</span></Link>
        </div>
        </>
    );
}

export default Camera;
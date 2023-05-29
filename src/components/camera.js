import React from 'react'
import { Link } from 'react-router-dom'
import {useEffect, useRef} from "react";

function Camera(props) {

    const streaming = false;

    useEffect(() => {
        let video = document.getElementById('video');

        navigator.mediaDevices
        .getUserMedia({ video: {
            facingMode: { exact: "environment" },
            aspectRatio: 9/16
          }, audio: false })
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
            <Link to={props.route} state={{ previousPath: window.location.pathname }}>Prendre une photo</Link>
        </div>
        </>
    );
}

export default Camera;
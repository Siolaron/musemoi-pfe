import { useLocation, useParams, useNavigate } from "react-router-dom";
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import artJson from '../../data/art.json';
import technicalJson from '../../data/technical.json';
import emotionsJson from '../../data/emotions.json';
import personalJson from '../../data/personnal.json';
import returnIcon from '../../assets/icone/back.png'
import mapPin from '../../assets/icone/pin.png'
import '../../style/art.css'


function remplirTableauAleatoire() {
    let tableau = [];
    for (var i = 0; i < 30; i++) {
        tableau.push(Math.floor(Math.random() * 100) + 1);
    }
    return tableau;
}

const tableauAleatoire = remplirTableauAleatoire();
  
function Art() {
    
    const { artId } = useParams()
    let previousPath  = useLocation().state.previousPath 
    const navigate = useNavigate();
    const singleArt = artJson.art.find(el=> el.id == artId)
    const img = require("../../assets/art/" + singleArt.img)
    let classNameEmotion
    const [artEmotions, setArtEmotions] = useState([])
    const [artEmotionInput, setArtEmotionInput] = useState('')
    const [touchImage, setTouchImage] = useState(false)
    
    document.querySelector('main')?.classList.add('art');

    const handlePopUP = (e) =>{
        document.querySelector('#overlay').classList.remove('art__popup-hidden')
    }

    const closePopup = (e) =>{
        document.querySelector('#overlay').classList.add('art__popup-hidden')
    }

    const handleSubmit = event =>{
        event.preventDefault();
        navigate('/');
    }

    const changeEmotions = (e) =>{
        if(e.target.checked){
            setArtEmotions(artEmotions => [...artEmotions, e.target.value])
        }
        else{
            setArtEmotions(artEmotions.filter(element => element !== e.target.value))
        }
    }

    const justImage = (e) =>{
        if(touchImage == false){
            if(e.touches.length === 2){
                document.querySelector('.art__presentation_back').classList.toggle('not-display')
                document.querySelector('.art__presentation_info').classList.toggle('not-display')
                document.querySelector('.art__presentation').firstChild.style.zIndex = "3"
                setTouchImage(true)
            }
        }else{
            if(e.touches.length === 0){
                document.querySelector('.art__presentation_back').classList.toggle('not-display')
                document.querySelector('.art__presentation_info').classList.toggle('not-display')
                document.querySelector('.art__presentation').firstChild.style.zIndex = "-3"
                setTouchImage(false)
            }
        }
    }
    
    
    return (
        <>
            <section className="art__presentation" onTouchStart={justImage} onTouchEnd={justImage}>
                <PinchZoomPan zoomButtons={false} maxScale={3}>
                    <img src={img} alt='' className='art__presentation_img'/>
                </PinchZoomPan>
                <div className="art__presentation_back" onClick={() => navigate(-1)}><img src={returnIcon} alt=''/><span className='sr-only'>Retour en arrière</span></div>
                <div className='art__presentation_info'>
                    <h2>{singleArt.name}</h2>
                    <h3>{singleArt.madeBy}</h3>
                </div>
            </section>
            <div className='art__information'>
                <p className='art__information_date'>{singleArt.createdAt} - 
                {singleArt.technical.map((data, key) => {
                    const technical = technicalJson.technical.find(el => el.id === data)
                    return (
                        <span className="art__information_date-technique" key={key}> 
                            {technical.name}
                        </span>
                    );
                })}
                </p>
                {previousPath !== '/search' && (
                <>
                <p className='art__information_more'>À propos de l'oeuvre</p>
                <p>{singleArt.description}</p>
                </>
                )}
                {previousPath !== '/scan' && (
                <>
                <div className='art__information_place'><img src={mapPin} alt='' width='48px' height='48px' /><p>{singleArt.place}</p></div>
                </>
                )}
                {previousPath === '/' && (
                <>
                <ul className='art__information_emotion'>
                {singleArt.emotions.map((data, key) => {
                    const emotion = emotionsJson.emotions.find(el => el.id === data)
                    const ownEmotions = personalJson.personal.find(el=> el.artId === singleArt.id).emotions
                    classNameEmotion = "normal"
                    if(ownEmotions.includes(emotion.id)){
                        classNameEmotion = "ownEmotion"
                    }
                    
                    return (
                        <li className={classNameEmotion} key={key}> 
                        <Link to='/search' state={{ emotion: emotion.id }}> #{emotion.name}</Link>
                        </li>
                    );
                })}
                </ul>
                </>
                )}
                {previousPath === '/scan' && (
                <>
                <div className='art__information_addCollection' onClick={handlePopUP}>Ajouter à ma collection <img src={returnIcon} alt=''/><span className='sr-only'>Ouverture d'une popup pour ajouter une émotion</span></div>
                </>
                )}
                {previousPath === '/scan' && (
                <>
                <div className="art__popup1 art__popup-hidden" id='overlay'>
                    <div className="art__popup">
                    <div className="art__popup_close" onClick={closePopup}>&times;</div>
                        <form  onSubmit={handleSubmit}>
                            <label><p>Associer un ressenti à l'oeuvre</p>
                            <input 
                                type="text" 
                                className="filter__search" 
                                value={artEmotionInput}
                                onChange={e => setArtEmotionInput(e.target.value)}
                                />
                            </label>
                            <p>Si vous n’avez pas d’idée vous pouvez toujours seléctionner un ressenti</p>
                            <ul className='art__popup_list-emotions'>
                            {emotionsJson.emotions.map((emotion, key) => {
                                if(tableauAleatoire.indexOf(emotion.id) !== -1){
                                    const idName = "emotion" + emotion.id
                                    return (
                                        <li key={key}>
                                            <input 
                                            type="checkbox" 
                                            className="filter__checkbox" 
                                            value={emotion.id}
                                            id={idName}
                                            onChange={changeEmotions}/>
                                            <label className='art__popup_list-emotions_single' for={idName}>{emotion.name}</label>
                                        </li>
                                    );
                                }
                            })}
                            </ul>
                            <input type="submit" value='Ajouter' />
                        </form>
                    </div>
                </div>
                </>
                )}
            </div>
        </>
    )
}

export default Art
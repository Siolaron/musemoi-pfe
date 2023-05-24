import { useLocation, useParams, useNavigate } from "react-router-dom";
import artJson from '../../data/art.json';
import technicalJson from '../../data/technical.json';
import emotionsJson from '../../data/emotions.json';
import personalJson from '../../data/personnal.json';
import { useState } from 'react';
import { Link } from 'react-router-dom'
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
    const img = require("../../assets/" + singleArt.img)
    let classNameEmotion
    const [artEmotions, setArtEmotions] = useState([])
    const [artEmotionInput, setArtEmotionInput] = useState('')
    
    const handlePopUP = (e) =>{
        document.querySelector('.art__popup').classList.remove('art__popup-hidden')
    }

    const closePopup = (e) =>{
        document.querySelector('.art__popup').classList.add('art__popup-hidden')
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
    
    return (
        <>
            <section className="art__presentation" style={{backgroundImage: `url(${img})`}}>
                <button onClick={() => navigate(-1)}>BACK</button>
                <h1>{singleArt.name}</h1>
                <h2>{singleArt.madeBy}</h2>
            </section>
            <p>{singleArt.createdAt} - 
            {singleArt.technical.map((data, key) => {
                const technical = technicalJson.technical.find(el => el.id === data)
                return (
                    <span className="" key={key}> 
                        {technical.name}
                    </span>
                );
            })}
            </p>
            {previousPath !== '/search' && (
             <>
             <p>{singleArt.description}</p>
             </>
            )}
            {previousPath !== '/scan' && (
             <>
             <p>{singleArt.place}</p>
             </>
            )}
            {previousPath === '/' && (
             <>
             {singleArt.emotions.map((data, key) => {
                const emotion = emotionsJson.emotions.find(el => el.id === data)
                const ownEmotions = personalJson.personal.find(el=> el.artId === singleArt.id).emotions
                classNameEmotion = "normal"
                if(ownEmotions.includes(emotion.id)){
                    classNameEmotion = "ownEmotion"
                }
                
                return (
                    <span className={classNameEmotion} key={key}> 
                    <Link to='/search' state={{ emotion: emotion.id }}> #{emotion.name}</Link>
                    </span>
                );
            })}
             </>
            )}
             {previousPath === '/scan' && (
             <>
             <button onClick={handlePopUP}>Ajouter à ma gallerie</button>
             </>
            )}
            {previousPath === '/scan' && (
             <>
             <div className="art__popup art__popup-hidden">
             <button onClick={closePopup}>Fermer</button>
                <form  onSubmit={handleSubmit}>
                    <label>Ajouter une émotion
                    <input 
                        type="text" 
                        className="filter__search" 
                        placeholder="Ajouter une émotion" 
                        value={artEmotionInput}
                        onChange={e => setArtEmotionInput(e.target.value)}
                        />
                    </label>
                    <ul>
                    {emotionsJson.emotions.map((emotion, key) => {
                        if(tableauAleatoire.indexOf(emotion.id) !== -1){
                            return (
                                <li key={key}>
                                    <label>{emotion.name}
                                    <input 
                                        type="checkbox" 
                                        className="filter__checkbox" 
                                        value={emotion.id}
                                        onChange={changeEmotions}/>
                                    </label>
                                </li>
                            );
                        }
                    })}
                    </ul>
                    <button type="submit">Ajouter</button>
                </form>
             </div>
             </>
            )}
        </>
    )
}

export default Art
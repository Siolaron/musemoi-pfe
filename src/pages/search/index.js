import { useState } from 'react';
import artJson from '../../data/art.json';
import technicalJson from '../../data/technical.json';
import emotionsJson from '../../data/emotions.json';
import movementJson from '../../data/movement.json';
import { Link, useLocation } from 'react-router-dom';

function Search() {
    let emotionFromArt  = useLocation().state?.emotion
    const [search, setSearch] = useState('');
    const [emotions, setEmotions] = useState([emotionFromArt]);
    const [technicals, setTechnicals] = useState([]);
    const [movements, setMovement] = useState([]);
    let isMovement
    let isTechnique
    let isEmotion

    const changeEmotionsFilter = (e) =>{
        if(e.target.checked){
            setEmotions(emotions => [...emotions, e.target.value])
        }
        else{
            setEmotions(emotions.filter(element => element !== e.target.value))
        }
    }

    const changeTechnicalFilter = (e) =>{
        if(e.target.checked){
            setTechnicals(technicals => [...technicals, e.target.value])
        }
        else{
            setTechnicals(technicals.filter(element => element !== e.target.value))
        }
    }

    const changeMovementFilter = (e) =>{
        if(e.target.checked){
            setMovement(movements => [...movements, e.target.value])
        }
        else{
            setMovement(movements.filter(element => element !== e.target.value))
        }
    }

    return (
        <>
            <div className="filter">
                <label>Rechercher
                <input 
                    type="text" 
                    className="filter__search" 
                    placeholder="Rechercher" 
                    value={search}
                    onChange={e => setSearch(e.target.value)}/>
                </label>
            </div>
            <h2>Emotions</h2>
            <ul>
            {emotionsJson.emotions.map((emotion, key) => {
            if(emotion.id === emotionFromArt){
                return (
                    <li key={key}>
                        <label>{emotion.name}
                        <input 
                            type="checkbox" 
                            className="filter__checkbox" 
                            value={emotion.id}
                            onChange={changeEmotionsFilter}
                            checked/>
                        </label>
                    </li>
                );
            }
            else{
                return (
                    <li key={key}>
                        <label>{emotion.name}
                        <input 
                            type="checkbox" 
                            className="filter__checkbox" 
                            value={emotion.id}
                            onChange={changeEmotionsFilter}
                            />
                        </label>
                    </li>
                );
            }
            })}
            </ul>
            <h2>Techniques</h2>
            <ul>
            {technicalJson.technical.map((technique, key) => {
                return (
                    <li key={key}>
                        <label>{technique.name}
                        <input 
                            type="checkbox" 
                            className="filter__checkbox" 
                            value={technique.id}
                            onChange={changeTechnicalFilter}/>
                        </label>
                    </li>
                );
            })}
            </ul>
            <h2>Mouvements</h2>
            <ul>
            {movementJson.movement.map((movement, key) => {
                return (
                    <li key={key}>
                        <label>{movement.name}
                        <input 
                            type="checkbox" 
                            className="filter__checkbox" 
                            value={movement.id}
                            onChange={changeMovementFilter}
                            />
                        </label>
                    </li>
                );
            })}
            </ul>
            <ul className="collection">
            {artJson.art.map((artSingle, key) => {
                const img = require("../../assets/" + artSingle.img)
                const route = "/art/" + artSingle.id
                const name = artSingle.name.toLowerCase()
                const madeBy = artSingle.madeBy.toLowerCase()
                const description = artSingle.description.toLowerCase()
                isEmotion = false
                isTechnique = false
                isMovement = false

                emotions.forEach((emotion) =>{
                    if(artSingle.emotions.indexOf(Number(emotion)) !== -1){
                        isEmotion = true
                    }
                })

                technicals.forEach((technical) =>{
                    if(artSingle.technical.indexOf(Number(technical)) !== -1){
                        isTechnique = true
                    }
                })

                movements.forEach((movement) =>{
                    if(artSingle.movement.indexOf(Number(movement)) !== -1){
                        isMovement = true
                    }
                })
               
                if(name.includes(search)  || madeBy.includes(search) || description.includes(search) || search === ''){
                    if(isEmotion || emotions.length === 0){
                        if(isMovement || movements.length === 0){
                            if(isTechnique || technicals.length === 0){
                                return (
                                    <li key={key}>
                                    <Link to={route} state={{ previousPath: window.location.pathname }}><img src={img} alt={artSingle.name}/></Link>
                                    </li>
                                );
                            }
                        }
                    }
                }
            })}
      </ul>
        </>
    )
}

export default Search
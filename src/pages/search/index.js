import { useState, useEffect } from 'react';
import artJson from '../../data/art.json';
import technicalJson from '../../data/technical.json';
import emotionsJson from '../../data/emotions.json';
import movementJson from '../../data/movement.json';
import { Link, useLocation } from 'react-router-dom';
import openIcon from '../../assets/icone/open.png';
import '../../style/search.css';

function Search() {
    const emotionFromArt  = useLocation().state?.emotion
    const [search, setSearch] = useState('');
    const [emotions, setEmotions] = useState([]);
    const [technicals, setTechnicals] = useState([]);
    const [movements, setMovement] = useState([]);
    let isMovement
    let isTechnique
    let isEmotion

    document.querySelector('main')?.classList.remove('art');

    useEffect(()=>{
        if(emotionFromArt != undefined){
            setEmotions(emotions => [...emotions, emotionFromArt])
        }
        
    },[emotionFromArt]) 

    const changeEmotionsFilter = (e) =>{
        if(e.target.checked){
            setEmotions(emotions => [...emotions, Number(e.target.value)])
        }
        else{
            setEmotions(emotions.filter(element => element !== Number(e.target.value)))
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
            <div id='overlay' class='overlay_filter overlay_filter_hidden'>
                <div className="filter">
                    <details>
                    <summary className='filter__element'>Emotions<img src={openIcon} alt='' width='16px' height='8px'/></summary>
                    <ul className="filter__emotion">
                    {emotionsJson.emotions.map((emotion, key) => {
                        let classNameEmotion = "filter__checkbox emotion-" + emotion.id

                        return (
                            <li key={key}>
                                <label className='container'>
                                <input 
                                    type="checkbox" 
                                    className={classNameEmotion}
                                    value={emotion.id}
                                    onChange={changeEmotionsFilter}
                                    checked={emotions.find(el => el === emotion.id) >= 0}
                                    />
                                    {emotion.name}
                                    <span className='checkmark'></span>
                                </label>
                            </li>
                        );
                    })}
                    </ul>
                    </details>
                    <details>
                    <summary className='filter__element'>Techniques<img src={openIcon} alt='' width='16px' height='8px'/></summary>
                    <ul className="filter__technical">
                    {technicalJson.technical.map((technique, key) => {
                        return (
                            <li key={key}>
                                <label className='container'>
                                <input 
                                    type="checkbox" 
                                    className="filter__checkbox" 
                                    value={technique.id}
                                    onChange={changeTechnicalFilter}/>
                                    {technique.name}
                                    <span className='checkmark'></span>
                                </label>
                            </li>
                        );
                    })}
                    </ul>
                    </details>
                    <details>
                    <summary className='filter__element'>Mouvements<img src={openIcon} alt='' width='16px' height='8px'/></summary>
                    <ul className="filter__movement">
                    {movementJson.movement.map((movement, key) => {
                        return (
                            <li key={key}>
                                <label className='container'>
                                <input 
                                    type="checkbox" 
                                    className="filter__checkbox" 
                                    value={movement.id}
                                    onChange={changeMovementFilter}
                                    />
                                    {movement.name}
                                    <span className='checkmark'></span>
                                </label>
                            </li>
                        );
                    })}
                    </ul>
                    </details>
                </div>
            </div>
            <div className="search__collection">
            <label><span className='sr-only'>Rechercher</span>
            <input 
                type="text" 
                className="filter__search" 
                placeholder="Rechercher" 
                value={search}
                onChange={e => setSearch(e.target.value)}/>
            </label>
            <ul className="search__collection__art">
            {artJson.art.map((artSingle, key) => {
                const img = require("../../assets/art/" + artSingle.img)
                const route = "/art/" + artSingle.id
                const name = artSingle.name.toLowerCase()
                const madeBy = artSingle.madeBy.toLowerCase()
                const description = artSingle.description.toLowerCase()

                let classNameRatioHeight

                if((artSingle.dimensions.height / artSingle.dimensions.width) < 1 ){
                    classNameRatioHeight = 'large'
                }else{
                    classNameRatioHeight = 'long'
                }

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
                                    <li key={key} className={classNameRatioHeight}>
                                    <Link to={route} state={{ previousPath: window.location.pathname }}><img src={img} alt={artSingle.name} /></Link>
                                    </li>
                                );
                            }
                        }
                    }
                }
            })}
      </ul>
      </div>
        </>
    )
}

export default Search
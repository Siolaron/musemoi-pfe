import {useLocation} from 'react-router-dom';
import { useState } from 'react';
import '../style/layouts/header.css';

function Header() {
  const location = useLocation().pathname
  let title

  const [menuFilter, setMenuFilter] = useState(false);
  
  if(location === '/search' || location === '/scan'){
    if(location === '/search'){
      title = 'Écran de recherche'
    }else{
      title = 'Écran de scan'
    }

    const openFilter = (e) =>{
      let burger = document.querySelector('.burger');
      let filter = document.querySelector('.filter');
      let overlay = document?.querySelector('.overlay_filter');

      if(menuFilter === false){
        burger.classList.add('active');
        filter.classList.add('open');
        overlay.classList.remove('overlay_filter_hidden');
        setMenuFilter(true);
      }
      else{
        burger.classList.remove('active');
        filter.classList.remove('open');
        overlay.classList.add('overlay_filter_hidden');
        setMenuFilter(false);
      }
      
    }

    const logo = require('../assets/logo.png')
    return ( 
    <>
      <header className="header">
        <h1 className="sr-only">{title}</h1>
        {location === '/search' && (
          <>
            <div class="burger-wrap">
              <div class="burger" onClick={openFilter}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </>
        )}
        <img src={logo} alt='Logo Musemoi' height='40px' width='40px'/>
      </header>
    </>
    );
  }
  if(location === '/'){
    return (
      <header className="header">
        <h1>Ma collection</h1>
      </header>
    );
  }
}

export default Header;
import {useLocation} from 'react-router-dom';
import '../style/layouts/header.css';

function Header() {
  const location = useLocation().pathname
  let title

  if(location === '/search' || location === '/scan'){
    if(location === '/search'){
      title = 'Écran de recherche'
    }else{
      title = 'Écran de scan'
    }

    const logo = require('../assets/logo.png')
    return (
      <header className="header">
        <h1 className="sr-only">{title}</h1>
        <img src={logo} alt='Logo Musemoi' height='40px' width='40px'/>
      </header>
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
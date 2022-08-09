import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPath } from '../slices/pathSlice';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();

    const handleClickMenu = () => {
        setShowMenu(prevState => !prevState);
    }

    const handleHomeClick = () => {
        dispatch(setPath(''));
    }

    const handleAboutClick = () => {
        dispatch(setPath('/about'));
    }

    return (
        <header>
            <div className={`hamburger-wrapper${showMenu ? ' open' : ''}`} onClick={handleClickMenu}>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>
            <div className={`side-menu${showMenu ? ' side-menu-show' : ''}`} onClick={handleClickMenu}>
                <nav>
                    <div className="header-link" onClick={handleHomeClick}>Home</div>
                    <div className="header-link" onClick={handleAboutClick}>About</div>
                </nav>
            </div>
            <div className="header-link" onClick={handleHomeClick}>Gameweek</div>
        </header>
    );
}

export default Header;
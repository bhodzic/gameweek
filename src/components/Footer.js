
import { useDispatch } from 'react-redux';
import { setPath } from '../slices/pathSlice';

function Footer() {
    const dispatch = useDispatch();

    const handleHomeClick = () => {
        dispatch(setPath(''));
    }

    const handleAboutClick = () => {
        dispatch(setPath('/about'));
    }

    return (
        <footer>
            <span className="footer-link" onClick={handleHomeClick}>Home</span>
            <span className="footer-link" onClick={handleAboutClick}>About </span>
        </footer>
    );
}

export default Footer;
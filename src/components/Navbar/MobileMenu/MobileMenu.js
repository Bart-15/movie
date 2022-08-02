import { useContext } from "react";
import NavContext from '../../../context/NavContext';
import { MobileMenuContainer, CloseIcon, MenuContainer, MenuLinks } from "./styledMobileMenu";
import {AiOutlineClose} from 'react-icons/ai';



const MobileMenu = () => {
    const navContext = useContext(NavContext);
    const { isOpen, setOpen } = navContext;


    const handleClose = () => setOpen(false);

    return ( 
        <MobileMenuContainer open={isOpen}>
            <CloseIcon>
                <AiOutlineClose onClick={() => setOpen(false)} size={30} />  
            </CloseIcon>
            <MenuContainer>
                <MenuLinks to="/" onClick={handleClose}>
                    Home
                </MenuLinks>
                <MenuLinks to="/movies" onClick={handleClose}>
                    Movies
                </MenuLinks>
                <MenuLinks to="/tv-shows" onClick={handleClose}>
                    Tv Series
                </MenuLinks>
            </MenuContainer>
        </MobileMenuContainer>
    );
}

export default MobileMenu;
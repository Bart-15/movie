import {useState, useEffect} from 'react';
import { useContext } from "react";
import NavContext from '../../../context/NavContext';
import { MobileMenuContainer, CloseIcon, MenuContainer, MenuLinks } from "./styledMobileMenu";
import {AiOutlineClose} from 'react-icons/ai';

const MobileMenu = () => {
    const navContext = useContext(NavContext);
    const { isOpen, setOpen } = navContext;

    const handleClose = () => setOpen(false);

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        width >= 768 && setOpen(false);
        
        return () => window.removeEventListener("resize", handleResize);
    }, [width])

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
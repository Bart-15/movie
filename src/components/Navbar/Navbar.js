import {useContext} from 'react';
import {
    MenuContainer,
    MenuLinks,
    Nav,
    NavContainer,
    NavLogo,
    SearchBar,
    HamburgerIcon
} from './styledNav';
import popcorn from '../../assets/img/popcorn.png';
import NavContext from '../../context/NavContext';
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const navContext = useContext(NavContext);
    const { setOpen } = navContext;

    return (    
        <Nav>
            <NavContainer>
                <NavLogo src={popcorn} alt="popcorn"/>
                <MenuContainer>
                    <MenuLinks to="/">Home</MenuLinks>
                    <MenuLinks to="/movies">Movies</MenuLinks>
                    <MenuLinks to="/tv-shows">Tv Shows</MenuLinks>
                    <SearchBar type="input" placeholder='Search Here...'/>
                </MenuContainer>
                <HamburgerIcon>
                    <AiOutlineMenu size={30} color="#333" onClick={() => setOpen(true)}/>
                </HamburgerIcon>
            </NavContainer>
        </Nav>
    );
}

export default Navbar;
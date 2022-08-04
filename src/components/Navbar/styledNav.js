import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


export const Nav = styled.div`
    height:86px;
    box-shadow: 0px 5px 11px -10px rgb(0 0 0 / 75%);
    z-index:10;

`

export const NavContainer = styled.div`
    display:flex;
    overflow:hidden;
    margin:0 auto;
    justify-content:space-between;
    height:86px;
    max-width:1200px;
    z-index:1;


`

export const NavLogo = styled.img`
    display:flex;
    justify-self:start;
    align-items:center;
    padding:20px;
`

export const MenuContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

    @media(max-width: 768px) {
        display:none;
    }

    & .active {
        border-bottom:2px solid #85bd64;
    }
    `

export const MenuLinks = styled(NavLink)`
    background:transparent;
    color:#5a5c5c;
    margin:0 15px 0;
    font-weight: 500;
    font-size: 16px;
    text-decoration:none;
    border: none;
    cursor:pointer;
    
    
    &:hover {
        transition:.3s ease-in-out;
        color:#333;
    }

`

export const SearchBar = styled.input`
    margin: 0 20px 0;
    padding:10px;
    transition:.3s ;
    width:150px;
    background:#dadee0;
    border-radius:50px;
    border:0;
    outline:0;
    color:#5a5c5c;

    &:focus {
        width:230px;
    }
`

export const HamburgerIcon = styled.div`
    display: none;
    padding: 28px 15px;
    
    @media(max-width: 768px) {
        display:block;
    }
`
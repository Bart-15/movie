import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';


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

export const DropdownContainer = styled.div`
    max-width:1200px;
    margin:3px auto 0 auto;
    position:relative;
    z-index:1;
    `

export const DropDown = styled.div`
    transition:.4s ease-in-out;
    display:none;
    background:#333;
    width:200px;
    overflow:auto;
    position:absolute;
    top:-23px;
    right: 32px;
    opacity:0;
    border-radius:5px;
    
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #f78b31; 
        border-radius: 10px;
    }

    @media screen and (min-width: 768px) {
        display: ${ props => (props.results.length > 0 || props.noData ) ? 'block' : 'none' };
        opacity: ${ props => ( props.focus ) ? "100%" : "0" };
        height: ${ props => props.noData ? "40px" : "200px"}
    }
`

export const ListContainer = styled.ul`
    padding:0 10px;    
    > * {
        &:last-child {
            border-bottom:none;
        }
    }
`
export const ListItem = styled.li`
    padding:5px 0;
    border-bottom:1px solid #f78b31;
    color:#fff;
    list-style-type: none;
    cursor:pointer;
`
export const Text = styled.p`
    color:#fff;
    padding:10px;
`
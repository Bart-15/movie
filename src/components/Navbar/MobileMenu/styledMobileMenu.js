import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const MobileMenuContainer = styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#000;
    transition: 0.3s ease-in-out;
    left:0;
    opacity: ${({open}) => (open) ? "100%" : "0"};
    top: ${({open}) => (open) ? "0" : "-100%"};
`

export const CloseIcon = styled.p`
    color:#fff;
    text-align: right;
    padding: 20px;
    cursor: pointer;
`

export const MenuContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MenuLinks = styled(Link)`
    text-decoration: none;
    font-size:25px;
    padding:30px 0 0;
    color:#fff;

    &:hover {
        
    }
`
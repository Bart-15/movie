import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const MobileMenuContainer = styled.aside`
    display:block;
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    transition: 0.3s ease-in-out;
    left:0;
    backdrop-filter: blur(2px) saturate(72%);
    background-color: rgba(17, 17, 17, 0.74);
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
    transition: .3s ease-in-out;

    &:hover {
        color:#676b6d;
    }
`
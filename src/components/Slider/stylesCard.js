import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Card = styled.div`
    /* padding:10px; */
    border:5px solid #fff;

`

export const CardContent = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    @media screen and (min-width: 768px){
        max-width:80%;
    }

    @media screen and (min-width: 1000px){
        max-width:70%;
    }
`

export const Img = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    border-radius:10px;

    @media screen and (min-width: 768px){
        max-width:80%;
    }

    @media screen and (min-width: 1000px){
        max-width:70%;
    }
`

export const Title = styled(Link)`
    color:#333;
    padding:5px 0;
    font-size:16px;
    text-decoration:none;
    font-weight:bold;

    &:hover{
        color:#111;
    }
    
    @media screen and (min-width: 768px){
        font-size:18px;
    }

    @media screen and (min-width: 1000px){
        font-size:20px;
    }
`
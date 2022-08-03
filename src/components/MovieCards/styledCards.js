import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Card = styled.div`
    width: 100%;
    background: #fff;
    margin-bottom: 50px;
    transition: .3s ease-in-out;
    padding:10px 10px 0;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
    }

    @media screen and (min-width: 768px){
        width:50%;
    }

    @media screen and (min-width: 1000px){
        width:30%;
    }

    @media screen and (min-width: 1200px){
        width:20%;
    }
`

export const ImgCard = styled.img`
    width:100%;
`

export const CardContent = styled.div`
`

export const CardTitle = styled(Link)`
    font-size:20px;
    cursor:pointer;
    color:#333;
    font-weight:bold;
    text-decoration:none;

    &:hover {
        color:#111;
    }

    @media screen and (min-width: 768px){
        font-size:18px;
    }

    @media screen and (min-width: 1000px){
        font-size:16px;
    }

`

export const CardDesc = styled.p`
    font-size:12px;
    color:#676b6d;
    padding:10px 0;

    

    @media screen and (min-width: 1000px){
        font-size:14px;
    }

`
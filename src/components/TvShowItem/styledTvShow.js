import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    max-width:1200px;
    margin:0 auto;
    padding:20px 15px;
`

export const Section = styled.section`
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    transition:.3s ease-in-out;

    @media screen and (min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
`

export const MovieImg = styled.img`
    width: 100%;
`
export const SectionCol1 = styled.div`
    @media screen and (min-width: 768px){
        padding:20px 25px 0;
    }

`
export const SectionCol2 = styled.div`
    display:flex;
    flex-direction: column;
    @media screen and (min-width: 768px){
        padding:20px 0;
    }
`

export const Title = styled.h2`
    font-size:18px;
    @media screen and (min-width: 768px){
        font-size:24px;
    }
    @media screen and (min-width: 1000px){
        font-size:30px;
    }
`

export const Description = styled.p`
    word-spacing:1px;
    padding:10px 0 0;
    color:#676b6d;
    @media screen and (min-width: 768px){
        font-size:14px;
    }
`

export const ReleaseDate = styled.span`
    @media screen and (min-width: 768px){
        font-size:14px;
    }
`

export const Genre = styled.p`
    color:#fff;
    background:#f78b31;
    padding:5px 10px;
    margin:5px 10px 0 0;
    border-radius:50px;
    @media screen and (min-width: 768px){
        font-size:14px;
        padding:5px 10px;
    }

    @media screen and (min-width: 1000px){
        padding:10px 15px;
    }
`

export const GenreContainer = styled.div`
    padding:5px 0;
    display: flex;
    flex-flow: wrap;
`

export const Button = styled.button`
    background:#111;
    color:#fff;
    padding:5px 10px;
    margin:5px 0;
    border-radius:10px;
    transition:.3s ease-in-out;
    cursor:pointer;
    border:none;
    width:100px;

    &:hover{
        color:#f78b31;
    }
    @media screen and (min-width: 768px){
        font-size:14px;
        padding:5px 10px;
        width:120px;
    }

    @media screen and (min-width: 1000px){
        padding:10px 15px;
    }
`

export const  Modal = styled.div`
    display: ${props => props.open ? "block" : "none"};
    z-index: 15;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(54, 54, 54, 0.15);
    backdrop-filter: blur(5px);
`

export const VideoContainer = styled.div`
    margin:0 auto;
    position: absolute;
    text-align: right;
    max-width:1200px;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

export const HomeLink =  styled.a`
    cursor:pointer;
    &:hover {
        opacity: .8;
    }
`

export const Iframe = styled.iframe`
    width:300px;
    height:300px;
    transition:.2s ease-in-out;

    @media screen and (min-width: 768px){
        width:500px;
        height:500px;
    }

    @media screen and (min-width: 1000px){
        width:800px;
    }

    @media screen and (min-width: 1200px){
        width:1000px;
    }
`

export const SmallText = styled.span`
    padding:5px 0;
    @media screen and (min-width: 768px){
        font-size:14px;
    }

`

export const SmallTextContainer = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
`

export const SliderContainer = styled.div`
    padding:10px 20px;

    @media screen and (min-width:768px) {
        padding:10px 50px;
    }
`

export const SliderTitle = styled.h2`
    font-size:20px;
    color:#f78b31;

    @media screen and (min-width:768px) {
        margin-left:40px;
    }
`

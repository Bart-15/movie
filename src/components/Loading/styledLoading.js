import styled from 'styled-components';

export const SpinnerContainer = styled.div`
    z-index: auto;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(54, 54, 54, 0.15);
    backdrop-filter: blur(5px);
`
export const SpinnerWrapper = styled.div`
    position: absolute;
    text-align: right;
    max-width:1200px;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

export const Img = styled.img`
    padding:70px;
`
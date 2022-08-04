import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 80%;
    /* max-width:1200px; */
    margin:0 auto;
    padding:20px 10px;


    
`

export const Section = styled.section`

`

export const SectionTitle = styled.h2`
    color:#f78b31;
    font-size:24px;

    @media screen and (min-width:768px) {
        padding:0 30px;
    }

    @media screen and (min-width:1000px) {
        padding:0 40px;
    }

    @media screen and (min-width:1200px) {
        padding:0 50px;
    }
`
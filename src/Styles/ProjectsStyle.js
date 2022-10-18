import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 500px){
        display: initial;
    }
`

export const Section = styled.section`
    width: 90vw;
    display: flex;
    flex-direction: column;
    height: 70vh;
    justify-content: space-evenly;

    @media(max-width: 924px){
        width: 95vw;
    }

    @media(max-width: 824px){
        width: 100vw;
        height: 65vh;
    }

    @media(max-width: 724px){
        height: 63vh;
    }

    @media(max-width: 500px){
        width: 100%;
        height: 95vh;
    }
`

export const H2 = styled.h2`
    font-size: 2.7vw;
    text-align: center;

    @media(max-width: 924px){
        font-size: 3.5vw;
    }

    @media(max-width: 724px){
        font-size: 4.3vw;
    }

    @media(max-width: 624px){
        font-size: 5.1vw;
    }

    @media(max-width: 500px){
        font-size: 9vw;
    }
`

export const DivOne = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 500px){
        flex-direction: column;
        height: 80vh;
    }
`

export const DivTwo = styled.div`
    width: 42%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 924px){
        width: 45%;
        height: 44vh;
    }

    @media(max-width: 624px){
        height: 38vh;
    }

    @media(max-width: 500px){
        width: 100%;
        height: 53vh;
    }
`

export const ImgOne = styled.img`
    width: 80%;

    @media screen and (max-width: 724px) and (min-width: 500px){
        width: 100%;
    }

    @media(max-width: 500px){
        width: 80%;
    }
`

export const DivThree = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

export const A = styled.a`
    text-decoration: none;
    width: 4vw;
    display: flex;
    justify-content: center;
    transition: background 0.5s;

    &:hover{
        background-color:  #AFEEEE;
    }

    @media(max-width: 500px){
        width: 8vw;
    }
`

export const ImgTwo = styled.img`
    width: 3.2vw;

    @media(max-width: 924px){
        width: 4vw;
    }

    @media(max-width: 724px){
        width: 4.5vw;
    }

    @media(max-width: 624px){
        width: 5vw;
    }

    @media(max-width: 500px){
        width: 7vw;
    }
`

export const DivFour = styled.div`
    width: 40%;

    @media(max-width: 500px){
        width: 80%;
    }
`

export const P = styled.p`
    font-size: 1.5vw;
    text-align: justify;

    @media(max-width: 924px){
        font-size: 1.8vw;
    }

    @media(max-width: 824px){
        font-size: 2.1vw;
    }

    @media(max-width: 724px){
        font-size: 2.4vw;
    }

    @media(max-width: 624px){
        font-size: 2.7vw;
    }

    @media(max-width: 500px){
        font-size: 4vw;
    }
`
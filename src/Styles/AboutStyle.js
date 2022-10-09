import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 110vh;

    @media(max-width: 875px){
        justify-content: space-around;
    }

    @media(max-width: 500px){
        height: 250vh;
        justify-content: space-around;
    }

    @media(max-width: 425px){
        height: 230vh;
    }
`

export const Section = styled.section`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 500px){
        flex-direction: column;
        height: 70vh;
        justify-content: space-between;
        border: solid #AFEEEE;
        border-radius: 2vw 2vw 2vw 2vw;
    }
`

export const SectionMid = styled.section`
    display: flex;
    flex-direction: row-reverse;
    width: 90%;
    border-radius: 25%;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 500px){
        flex-direction: column;
        height: 70vh;
        justify-content: space-between;
        border: solid #AFEEEE;
        border-radius: 2vw 2vw 2vw 2vw;
    }
`

export const ImgBox = styled.div`
    background-color: #AFEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    border-radius: 1vw 0 0 1vw;
    height: 30vh;

    @media(max-width: 500px){
        border-radius: 0;
        width: 100%;
        height: 100%;
    }
`

export const MidImgBox = styled.div`
    background-color: #AFEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    border-radius: 0 1vw 1vw 0;
    height: 30vh;
    @media(max-width: 500px){
        border-radius: 0;
        width: 100%;
        height: 100%;
    }
`

export const ImgOne = styled.img`
    width: 20vw;
    transition: transform .2s;
    &:hover{
        transform: scale(0.95);  
    }

    @media(max-width: 775px){
        width: 23vw;
    }

    @media(max-width: 675px){
        width: 25vw;
    }

    @media(max-width: 500px){
        width: 70vw;
    }
`

export const ImgTwo = styled.img`
    width: 15vw;
    transition: transform .2s;
    &:hover{
        transform: scale(0.95);  
    }

    @media(max-width: 675px){
        width: 18vw;
    }

    @media(max-width: 500px){
        width: 50vw;
    }
`

export const ImgThree = styled.img`
    width: 15vw;
    transition: transform .2s;
    &:hover{
        transform: scale(0.95);  
    }

    @media(max-width: 775px){
        width: 17vw;
    }

    @media(max-width: 675px){
        width: 19vw;
    }

    @media(max-width: 500px){
        width: 50vw;
    }
`

export const Textbox = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    @media(max-width: 500px){
        width: 100%;
    }
`

export const P = styled.p`
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.5vw;
    width: 25vw;
    text-align: center;

    @media(max-width: 975px){
        font-size: 1.8vw;
    }

    @media(max-width: 875px){
        font-size: 1.8vw;
    }

    @media(max-width: 775px){
        font-size: 2vw;
    }

    @media(max-width: 675px){
        font-size: 2.3vw;
        width: 30vw;
    }

    @media(max-width: 575px){
        font-size: 2.7vw;
        width: 35vw;
    }

    @media(max-width: 500px){
        font-size: 3.7vw;
        width: 100%;
    }

    @media(max-width: 425px){
        font-size: 4vw;
    }


    @media(max-width: 375px){
        font-size: 4.5vw;
    }

    @media(max-width: 375px){
        font-size: 4.9vw;
    }

`
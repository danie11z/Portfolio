import styled from "styled-components"

export const Main = styled.main`
    
`

export const SectionOne = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 500px){
        flex-direction: column-reverse;
    }

    @media screen and (max-width: 575px) and (min-width: 500px){
        height: 60vh;
    }
`

export const DivOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 45vh;
    animation: ola 0.5s ease-in-out 0.5s 1 both;


    @keyframes ola{
        0%{
            color: #FFFFFF;
        }
        100%{
            color: #000000;
        }
    }

    @media(max-width: 500px){
        animation: none;
    }
    
    @media(max-width: 975px){
        height: 35vh;
    }

    @media(max-width:400px){
        height: 40vh;
    }

    @media(max-width: 350px){
        height: 35vh;
    }
`

export const H2 = styled.h2`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 2.5vw;

    @media(max-width: 875px){
        font-size: 3vw;
    }

    @media(max-width: 775px){
        font-size: 3.5vw;
    }

    @media(max-width: 675px){
        font-size: 4vw;
    }

    @media(max-width: 575px){
        font-size: 4.5vw;
    }

    @media(max-width: 500px){
        font-size: 7vw;
    }
    @media(max-width: 350px){
        font-size: 7.6vw;
    }
`

export const P = styled.p`
    font-size: 1.6vw;
    font-family: 'Roboto Condensed', sans-serif;
    width: 20vw;
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
    line-height: 4vh;

    @media(max-width: 975px){
        font-size: 1.8vw;
        width: 23vw;
    }

    @media(max-width: 875px){
        font-size: 1.9vw;
        width: 25vw;
    }

    @media(max-width: 775px){
        font-size: 2.3vw;
        width: 27vw;
    }

    @media(max-width: 675px){
        font-size: 2.7vw;
        width: 31vw;
    }

    @media(max-width: 575px){
        font-size: 3.1vw;
        width: 36vw;
    }

    @media(max-width: 500px){
        font-size: 4.4vw;
        width: 75%;
        line-height: 5vh;
    }

    @media(max-width: 350px){
        font-size: 5vw;
        line-height: 4vh;
    }
`

export const DivTwo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 75vh;

    @media(max-width: 975px){
        height: 65vh;
    }

    @media(max-width: 875px){
        height: 58vh;
    }

    @media screen and (max-width: 575px) and (min-width: 500px){
        height: 60vh;
    }

    @media(max-width: 500px){
        height: 90vh;
    }

    @media(max-width: 450px){
        height: 80vh;
    }

    @media(max-width: 400px){
        height: 70vh;
    }

    @media(max-width: 350px){
        height: 63vh;
    }
`

export const Img = styled.img`
    width: 30vw;

    @media(max-width: 775px){
        width: 33vw;
    }

    @media(max-width: 675px){
        width: 37vw;
    }

    @media(max-width: 575px){
        width: 41vw;
    }

    @media(max-width: 500px){
        width: 85%;
        border-radius: 50%;
    }
`

export const DivThree = styled.div`
    display: flex;
    width: 25vw;
    align-items: center;
    justify-content: space-evenly;

    @media(max-width: 675px){
        width: 28vw;
    }
    
    @media(max-width: 500px){
        width: 75%;
        box-shadow: 0 7px 6px #00000029;
    }

`

export const ImgRedes = styled.img`
    width: 3.5vw;
    border-radius: 50%;

    @media(max-width: 875px){
        width: 4vw;
    }

    @media(max-width: 675px){
        width: 5vw;
    }

    @media(max-width: 575px){
        width: 5.8vw;
    }

    @media(max-width: 500px){
        width: 10vw;
    }
`

export const SectionTwo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 25vh;

    @media(max-width: 575px){
        height: 23vh;
    }

    @media(max-width: 350px){
        height: 20vh;
    }
`

export const DivFour = styled.div`
`

export const ImgSkills = styled.img`
    width: 5vw;

    @media(max-width: 775px){
        width: 6vw;
    }

    @media(max-width: 675px){
        width: 6.5vw;
    }

    @media(max-width: 575px){
        width: 7vw;
    }

    @media(max-width: 500px){
        width: 11vw;
    }
    @media(max-width: 400px){
        width: 12vw;
    }
    @media(max-width: 350px){
        width: 13vw;
    }
`
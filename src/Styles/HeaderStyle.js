import styled from "styled-components"
import {Link} from "react-router-dom"

export const Topo = styled.header`
    display: flex;
`

export const Nav = styled.nav`
    width: 100%;
`

export const MenuList = styled.ul`
    display: flex;
    width: 30vw;
    justify-content: space-evenly;
    align-items: center;
    height: 9vh;

    @media(max-width: 768px){
        width: 36vw;
    }

    @media(max-width: 600px){
        width: 37vw;
    }

    @media(max-width: 500px){
        width: 45vw;
    }

    @media(max-width: 450px){
        width: 48vw;
    }

    @media(max-width:425px){
        width: 100%;
    }
`

export const MenuLink = styled(Link)`
    text-decoration: none;
    color: #696969;
    font-weight: 600;
    font-size: 1.3vw;

    &:hover{
        color: #000000;
    }

    @media(max-width: 2560px){
        font-size: 1.5vw;
    }

    @media(max-width: 2230px){
        font-size: 1.6vw;
    }

    @media(max-width: 1440px){
        font-size: 1.5vw;
    }

    @media(max-width: 800px){
        font-size: 1.7vw;
    }

    @media(max-width: 768px){
        font-size: 2vw;
    }

    @media(max-width: 670px){
        font-size: 2.3vw;
    }

    @media(max-width: 580px){
        font-size: 2.5vw;
    }

    @media(max-width: 500px){
        font-size: 3vw;
    }

    @media(max-width: 450px){
        font-size: 3.2vw;
    }

    @media(max-width: 425px){
        font-size: 4vw;
    }

    @media(max-width: 320px){
        font-size: 4.3vw;
    }
`
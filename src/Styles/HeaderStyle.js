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

    @media screen and (max-width: 820px) and (min-width: 500px){
        width: 55vw;
    }
    
    @media screen and (max-width: 500px) and (min-width: 320px){
        width: 100%;
    }
`

export const MenuLink = styled(Link)`
    text-decoration: none;
    color: #696969;
    font-weight: 600;
    font-size: 1.5vw;
    font-family: 'Roboto Condensed', sans-serif;

    &:hover{
        color: #000000;
    }

    @media screen and (max-width: 820px) and (min-width: 680px){
        font-size: 3vw;
    }

    @media screen and (max-width: 680px) and (min-width: 563px){
        font-size: 3.5vw;
    }

    @media screen and (max-width: 563px) and (min-width: 500px){
        font-size: 3.8vw;
    }

    @media screen and (max-width: 500px) and (min-width: 320px){
        font-size: 4vw;
    }
`
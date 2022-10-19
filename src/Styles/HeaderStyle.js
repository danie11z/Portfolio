import styled from "styled-components"
import {Link} from "react-router-dom"

export const Topo = styled.header`
    display: flex;
    position: sticky;
    z-index: 1;
    background-color: #FFFFFF;
    top: 0;
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

    @media(max-width: 820px){
        width: 55vw;
    }
    
    @media(max-width: 500px){
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

    @media(max-width: 950px){
        font-size: 2vw;
    }

    @media(max-width: 820px){
        font-size: 2.5vw;
    }

    @media(max-width: 680px){
        font-size: 3vw;
    }

    @media(max-width: 563px){
        font-size: 3.8vw;
    }

    @media (max-width: 500px){
        font-size: 4vw;
    }
`
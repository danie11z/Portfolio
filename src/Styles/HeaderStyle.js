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

    @media screen and (max-width: 700px) and (min-width: 501px){
        width: 50vw;
    }

    @media screen and (max-width: 500px) and (min-width: 320px){
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

    @media screen and (max-width: 700px) and (min-width: 500px){
        font-size: 3vw;
    }

    @media screen and (max-width: 500px) and (min-width: 320px){
        font-size: 4vw;
    }
`
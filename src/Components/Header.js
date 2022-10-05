import React from "react"

import * as S from "../Styles/HeaderStyle"

const Header = ({rotaSobre, rotaProjetos, rotaContato}) =>{
    return(
        <S.Topo>
            <S.Nav>
                <S.MenuList>
                    <li>
                        <S.MenuLink to="/" title="Sobre mim">{rotaSobre}</S.MenuLink>
                    </li>
                    <li>
                        <S.MenuLink to="/projetos" title="Projetos">{rotaProjetos}</S.MenuLink>
                    </li>
                    <li>
                        <S.MenuLink to="/contato" title="Contato">{rotaContato}</S.MenuLink>
                    </li>
                </S.MenuList>
            </S.Nav>
        </S.Topo>
    )
}

export default Header
import React from "react"

import * as S from "../Styles/HeaderStyle"

const Header = ({rotaHome, rotaProjetos, rotaSobre}) =>{
    return(
        <S.Topo>
            <S.Nav>
                <S.MenuList>
                    <li>
                        <S.MenuLink to="/" title="Início">{rotaHome}</S.MenuLink>
                    </li>
                    <li>
                        <S.MenuLink to="/projetos" title="Projetos">{rotaProjetos}</S.MenuLink>
                    </li>
                    <li>
                        <S.MenuLink to="/sobre" title="Sobre">{rotaSobre}</S.MenuLink>
                    </li>
                </S.MenuList>
            </S.Nav>
        </S.Topo>
    )
}

export default Header
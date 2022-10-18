import React from "react"
import * as S from "../Styles/ProjectsStyle"

import Flavo from "../assets/flavo.png"
import Portflow from "../assets/portflow.png"
import Ods from "../assets/ods.png"
import PP from "../assets/recipes.png"
import Watchill from "../assets/watchill.png"
import Pets from "../assets/pets.png"

import GitLogo from "../assets/github.png"
import VercelLogo from "../assets/logo-vercel.svg"

export default function About(){
    return(
        <S.Main>
            <S.Section>
                <S.H2>flavo</S.H2>
                <S.DivOne>
                    <S.DivTwo>
                        <S.ImgOne src={Flavo} alt="Print do projeto" />
                        <S.DivThree>
                            <S.A href="https://github.com/danie11z/flavo" title="Repositório" target="_blank">
                                <S.ImgTwo src={GitLogo} alt="Logo do Github" />
                            </S.A>
                            <S.A href="https://flavo.vercel.app/" title="Deploy" target="_blank">
                                <S.ImgTwo src={VercelLogo} alt="Logo do Vercel" />
                            </S.A>
                        </S.DivThree>
                    </S.DivTwo>
                    <S.DivFour>
                        <S.P>Projeto desenvolvido para telas mobile, em React.js com CSS. Ele simula a aba de um app de compras, possuindo um contador na parte de baixo, que quantifica os produtos a serem comprados.</S.P>
                    </S.DivFour>
                </S.DivOne>
            </S.Section>
            <S.Section>
                <S.H2>Portflow</S.H2>
                <S.DivOne>
                    <S.DivTwo>
                        <S.ImgOne src={Portflow} alt="Print do projeto" />
                        <S.DivThree>
                            <S.A href="https://github.com/danie11z/Portflow" title="Repositório" target="_blank">
                                <S.ImgTwo src={GitLogo} alt="Logo do Github" />
                            </S.A>
                            <S.A href="https://danie11z.github.io/Portflow/" title="Deploy" target="_blank">
                                <S.ImgTwo src={VercelLogo} alt="Logo do Vercel" />
                            </S.A>
                        </S.DivThree>
                    </S.DivTwo>
                    <S.DivFour>
                        <S.P>Projeto desenvolvido em tela desktop e para tela de 375px, focado no HTML e no CSS. Ele simula uma loja de produtos.</S.P>
                    </S.DivFour>
                </S.DivOne>
            </S.Section>
            <S.Section>
                <S.H2>ODS</S.H2>
                <S.DivOne>
                    <S.DivTwo>
                        <S.ImgOne src={Ods} alt="Print do projeto" />
                        <S.DivThree>
                            <S.A href="https://github.com/danie11z/ods" title="Repositório" target="_blank">
                                <S.ImgTwo src={GitLogo} alt="Logo do Github" />
                            </S.A>
                            <S.A href="https://ods-navy.vercel.app/" title="Deploy" target="_blank">
                                <S.ImgTwo src={VercelLogo} alt="Logo do Vercel" />
                            </S.A>
                        </S.DivThree>
                    </S.DivTwo>
                    <S.DivFour>
                        <S.P>Projeto voltado para a pesquisa dos Objetivos de Desenvolvimento Sustentável e como eles se desdobram em meu bairro. Nele, eu utilizei react, aplicando styled-components e modal.</S.P>
                    </S.DivFour>
                </S.DivOne>
            </S.Section>
            <S.Section>
                <S.H2>PairPrograming</S.H2>
                <S.DivOne>
                    <S.DivTwo>
                        <S.ImgOne src={PP} alt="Print do projeto" />
                        <S.DivThree>
                            <S.A href="https://github.com/danie11z/PairPrograming" title="Repositório" target="_blank">
                                <S.ImgTwo src={GitLogo} alt="Logo do Github" />
                            </S.A>
                            <S.A href="https://pair-programing-5m2d.vercel.app/" title="Deploy" target="_blank">
                                <S.ImgTwo src={VercelLogo} alt="Logo do Vercel" />
                            </S.A>
                        </S.DivThree>
                    </S.DivTwo>
                    <S.DivFour>
                        <S.P>Projeto que foi feito para treinar o Gitflow. Nele, eu e minha dupla utilizamos o React com styled-components. Ele também é voltado para telas mobile e simula um site de receitas.</S.P>
                    </S.DivFour>
                </S.DivOne>
            </S.Section>
            <S.Section>
                <S.H2>Watchill</S.H2>
                <S.DivOne>
                    <S.DivTwo>
                        <S.ImgOne src={Watchill} alt="Print do projeto" />
                        <S.DivThree>
                            <S.A href="https://github.com/danie11z/Watchill" title="Repositório" target="_blank">
                                <S.ImgTwo src={GitLogo} alt="Logo do Github" />
                            </S.A>
                            <S.A href="https://watchill-531g.vercel.app/filmes" title="Deploy" target="_blank">
                                <S.ImgTwo src={VercelLogo} alt="Logo do Vercel" />
                            </S.A>
                        </S.DivThree>
                    </S.DivTwo>
                    <S.DivFour>
                        <S.P>Projeto em que é simulada uma página de filmes. Nela, a API foi consumida via state. Também foi aplicado react-router-dom e filter no input para pesquisas.</S.P>
                    </S.DivFour>
                </S.DivOne>
            </S.Section>
            <S.Section>
                <S.H2>Pets</S.H2>
                <S.DivOne>
                    <S.DivTwo>
                        <S.ImgOne src={Pets} alt="Print do projeto" />
                        <S.DivThree>
                            <S.A href="https://github.com/danie11z/Pets" title="Repositório" target="_blank">
                                <S.ImgTwo src={GitLogo} alt="Logo do Github" />
                            </S.A>
                            <S.A href="https://pets-three.vercel.app/" title="Deploy" target="_blank">
                                <S.ImgTwo src={VercelLogo} alt="Logo do Vercel" />
                            </S.A>
                        </S.DivThree>
                    </S.DivTwo>
                    <S.DivFour>
                        <S.P>Página que simula um site de adoção de gatos e cachorros. Nele, a API foi consumida via useState. Também foi aplicado react-router-dom para construir as rotas.</S.P>
                    </S.DivFour>
                </S.DivOne>
            </S.Section>
        </S.Main>
    )
}
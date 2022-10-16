import React from "react"

import Flavo from "../assets/flavo.png"
import Portflow from "../assets/portflow.png"
import Ods from "../assets/ods.png"
import PP from "../assets/recipes.png"

import GitLogo from "../assets/github.png"
import VercelLogo from "../assets/logo-vercel.svg"

export default function About(){
    return(
        <>
            <section>
                <h2>flavo</h2>
                <div>
                    <div>
                        <img src={Flavo} alt="Print do projeto" />
                        <div>
                            <a href="https://github.com/danie11z/flavo" title="Repositório" target="_blank">
                                <img src={GitLogo} alt="Logo do Github" />
                            </a>
                            <a href="https://flavo.vercel.app/" title="Deploy" target="_blank">
                                <img src={VercelLogo} alt="Logo do Vercel" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p>Projeto desenvolvido para telas mobile, em React.js com CSS. Ele simula a aba de um app de compras, possuindo um contador na parte de baixo, que quantifica os produtos a serem comprados.</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>Portflow</h2>
                <div>
                    <div>
                        <img src={Portflow} alt="Print do projeto" />
                        <div>
                            <a href="https://github.com/danie11z/Portflow" title="Repositório" target="_blank">
                                <img src={GitLogo} alt="Logo do Github" />
                            </a>
                            <a href="https://danie11z.github.io/Portflow/" title="Deploy" target="_blank">
                                <img src={VercelLogo} alt="Logo do Vercel" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p>Projeto desenvolvido em tela desktop e para tela de 375px, focado no HTML e no CSS. Ele simula uma loja de produtos.</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>ODS</h2>
                <div>
                    <div>
                        <img src={Ods} alt="Print do projeto" />
                        <div>
                            <a href="https://github.com/danie11z/ods" title="Repositório" target="_blank">
                                <img src={GitLogo} alt="Logo do Github" />
                            </a>
                            <a href="https://ods-navy.vercel.app/" title="Deploy" target="_blank">
                                <img src={VercelLogo} alt="Logo do Vercel" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p>Projeto voltado para a pesquisa dos Objetivos de Desenvolvimento Sustentável e como eles se desdobram em meu bairro. Nele, eu utilizei react, aplicando styled-components e modal.</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>PairPrograming</h2>
                <div>
                    <div>
                        <img src={PP} alt="Print do projeto" />
                        <div>
                            <a href="https://github.com/danie11z/PairPrograming" title="Repositório" target="_blank">
                                <img src={GitLogo} alt="Logo do Github" />
                            </a>
                            <a href="https://pair-programing-5m2d.vercel.app/" title="Deploy" target="_blank">
                                <img src={VercelLogo} alt="Logo do Vercel" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p>Projeto que foi feito para treinar o Gitflow. Nele, eu e minha dupla utilizamos o React com styled-components. Ele também é voltado para telas mobile e simula um site de receitas.</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>flavo</h2>
                <div>
                    <div>
                        <img alt="Print do projeto" />
                        <div>
                            <a href="#" title="Repositório" target="_blank">
                                <img src={GitLogo} alt="Logo do Github" />
                            </a>
                            <a href="#" title="Deploy" target="_blank">
                                <img src={VercelLogo} alt="Logo do Vercel" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
            </section>
            <section>
                <h2>flavo</h2>
                <div>
                    <div>
                        <img alt="Print do projeto" />
                        <div>
                            <a href="#" title="Repositório" target="_blank">
                                <img src={GitLogo} alt="Logo do Github" />
                            </a>
                            <a href="#" title="Deploy" target="_blank">
                                <img src={VercelLogo} alt="Logo do Vercel" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
            </section>
        </>
    )
}
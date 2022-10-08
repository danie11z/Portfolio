import React from "react"
import * as S from "../Styles/HomeStyle"

import Eu from "../assets/eu.jpg"
import Github from "../assets/github.png"
import Instagram from "../assets/instagram.png"
import LinkedIn from "../assets/linkedin.png"
import HTML from "../assets/HTML.png"
import CSS from "../assets/CSS.png"
import JS from "../assets/JS.png"
import Reactjs from "../assets/Reactjs.png"

export default function About(){
    return(
        <S.Main>
            <S.SectionOne>
                <S.DivOne>
                    <S.H2>Olá, eu sou o Daniel!</S.H2>
                    {/* <S.P>A programação entrou na minha vida por acaso. E cursando o bootcamp Vai na Web como Desenvolvedor Front-end, passei a admirar este universo.</S.P> */}
                    <S.P>Para acessar os meus serviços, disponibilizarei as minhas redes e alguns dos meus trabalhos na aba "Projetos".</S.P>
                </S.DivOne>
                <S.DivTwo>
                    <S.Img src={Eu} alt="Eu, um jovem branco de cabelo e sobrancelha pretos olhando para a câmera. Pelo lado direito, uma luz reflete em meu rosto. Uso blusa preta e o fundo é uma parede amarela." />
                    <S.DivThree>
                        <a href="https://github.com/danie11z" target="_blank" title="Meu Github">
                            <S.ImgRedes src={Github} alt="Ícone preto do Github"  />
                        </a>
                        <a href="https://instagram.com/danlopsss/" target="_blank" title="Meu Insta">
                            <S.ImgRedes src={Instagram} alt="Ícone preto do Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/in/daniel-lps" target="_blank" title="Meu LinkedIn">
                            <S.ImgRedes src={LinkedIn} alt="Ícone preto do LinkedIn" />
                        </a>
                    </S.DivThree>
                </S.DivTwo>
            </S.SectionOne>
            <S.SectionTwo>
                <S.H2>Habilidades</S.H2>
                <S.DivFour>
                    <S.ImgSkills src={HTML} alt="Símbolo HTML"  />
                    <S.ImgSkills src={CSS} alt="Símbolo CSS"  />
                    <S.ImgSkills src={JS} alt="Símbolo JavaScript"  />
                    <S.ImgSkills src={Reactjs} alt="Símbolo React JS"  />
                </S.DivFour>
            </S.SectionTwo>
        </S.Main>
    )
}
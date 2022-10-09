import React from "react"
import * as S from "../Styles/AboutStyle"

import PC from "../assets/PC.png"
import Tag from "../assets/tag.png"
import VNW from "../assets/vnw.svg"

export default function About(){
    return(
        <S.Main>
            <S.Section>
                <S.ImgBox>
                    <S.ImgOne src={PC} />
                </S.ImgBox>
                <S.Textbox>
                    <S.P>Olá, como vocês viram, eu sou o Daniel. Falando mais sobre mim: eu tenho 19 anos e sou carioca. Eu não esperava saber tanto de sites quanto sei hoje, pelo menos, não agora.</S.P>
                </S.Textbox>
            </S.Section>
            <S.SectionMid>
                <S.MidImgBox>
                    <S.ImgTwo src={Tag} />
                </S.MidImgBox>
                <S.Textbox>
                    <S.P>Eu entrei no mundo da programação há um tempo relativamente curto. Lembro que, no início, ainda não tinha noção do que estava por vir; de até onde esse novo aprendizado poderia me levar.</S.P>
                </S.Textbox>
            </S.SectionMid>
            <S.Section>
                <S.ImgBox>
                    <S.ImgThree src={VNW} />
                </S.ImgBox>
                <S.Textbox>
                    <S.P>A primeira oportunidade veio com o bootcamp Vai na Web. Foram 8 meses estudando, para vir a ser um Desenvolvedor Front-end; oito meses evoluindo exponencialmente.</S.P>
                </S.Textbox>
            </S.Section>
        </S.Main>
    )
}
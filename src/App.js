import React from "react"
import HeaderRouter from "./Router/HeaderRouter"

import * as S from "./Styles/AppStyle"

export default function App(){
  return(
    <>
      <S.GlobalStyle />
      <HeaderRouter />
    </>
  )
}
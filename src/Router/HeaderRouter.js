import React from "react"
import Header from "../Components/Header"

import Home from "../Components/Home"
import Projects from "../Components/Projects"
import About from "../Components/About"

import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function RouterHeader(){
    return(
        <BrowserRouter>
            <Header rotaHome="Início" rotaProjetos="Projetos" rotaSobre="Sobre" />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<Projects />} />
                <Route path="/sobre" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}
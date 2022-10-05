import React from "react"
import Header from "../Components/Header"

import About from "../Components/About"
import Projects from "../Components/Projects"
import Contact from "../Components/Contact"

import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function RouterHeader(){
    return(
        <BrowserRouter>
            <Header rotaSobre="Sobre" rotaProjetos="Projetos" rotaContato="Contato" />

            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projetos" element={<Projects />} />
                <Route path="/contato" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
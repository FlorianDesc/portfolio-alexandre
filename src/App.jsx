import { useState } from "react"
import Navbar from "./Components/Navbar"
import Accueil from "./pages/Accueil"
import Projet from "./pages/Projet"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Veille from "./pages/Veille"
import ProjetImages from "./Components/ProjetImages"
import VeilleImages from "./Components/VeilleImages"

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" Component={Accueil}></Route>
          <Route path="/Projets/:id" Component={Projet}></Route>
          <Route path="Projets/:id/images" Component={ProjetImages}></Route>
          <Route path="/Veille/:id" Component={Veille}></Route>
          <Route path="/Veille/:id/images" Component={VeilleImages}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

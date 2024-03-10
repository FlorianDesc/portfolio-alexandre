import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { nbArticle } from '../Data/nbInfoNav'
import { projetsData } from '../Data/Projet'
import { veilleData } from '../Data/Veille'

function ProjetImages() {

    const data = [...veilleData]

    const location = useLocation()
    const veilleId = location.pathname.charAt(8)
    const correctVeilleId = veilleId < nbArticle.veille
    const veilleToShow = correctVeilleId ? veilleId : 0
    
  return (
    <div className='max-w-screen min-h-screen bg-mainC flex flex-col justify-center items-center relative'>
    {
        data[veilleToShow].images.map((image, i) => {
            return <img className='w-[70%] m-8' key={i} src={image}/>
        })
    }
        <Link to={"/Veille/" + veilleToShow}>
            <button className='fixed top-8 left-8 text-zinc-300 text-lg'>✖</button>
        </Link>
    </div>
  )
}

export default ProjetImages
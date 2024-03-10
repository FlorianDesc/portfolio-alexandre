import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { nbArticle } from '../Data/nbInfoNav'
import { projetsData } from '../Data/Projet'

function ProjetImages() {

    const data = [...projetsData]

    const location = useLocation()
    const projectId = location.pathname.charAt(9)
    const correctProjectId = projectId < nbArticle.projets
    const projectToShow = correctProjectId ? projectId : 0
    
  return (
    <div className='max-w-screen min-h-screen bg-mainC flex flex-col justify-center items-center relative'>
    {
        data[projectToShow].image.map((image, i) => {
            return <img className='w-[70%] m-8' key={i} src={image}/>
        })
    }
        <Link to={"/Projets/" + projectToShow}>
            <button className='absolute top-8 left-8 text-zinc-300 text-lg'>✖</button>
        </Link>
    </div>
  )
}

export default ProjetImages
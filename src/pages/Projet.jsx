import React from 'react'
import SidebarProjet from '../Components/SidebarProjet'
import { projetsData } from '../Data/Projet'
import { useLocation } from 'react-router-dom'
import ProjetContent from '../Components/ProjetContent'
import { nbArticle } from '../Data/nbInfoNav'

function Projet() {

  const location = useLocation()
  const projectId = location.pathname.charAt(location.pathname.length - 1)
  const correctProjectId = projectId < nbArticle.projets
  const projectToShow = correctProjectId ? projectId : 0

  return (
    <div className='w-full min-h-screen flex bg-mainC text-textC'>
      <SidebarProjet data={projetsData} projectId={projectToShow}/>
      <ProjetContent
        id={projectToShow}
        projet={projetsData[projectToShow]}
      />
    </div>
  )
}

export default Projet
import React from 'react'
import { veilleData } from '../Data/Veille'
import SideBarVeille from '../Components/SideBarVeille'
import { useLocation } from 'react-router-dom'
import VeilleContent from '../Components/VeilleContent'
import { nbArticle } from '../Data/nbInfoNav'

function Veille() {

  const location = useLocation()
  const veilleId = location.pathname.charAt(location.pathname.length - 1)
  const correctVeilleId = veilleId < nbArticle.veille
  const veilleToShow = correctVeilleId ? veilleId : 0

  return (
    <div className='w-full min-h-screen flex bg-mainC text-textC'>
      <SideBarVeille data={veilleData} veilleId={veilleToShow}/>
      <VeilleContent veille={veilleData[veilleToShow]} id={veilleToShow}/>
    </div>
  )
}

export default Veille
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProjetContent({projet, id}) {

  const [showImages, setShowImages] = useState(false)

  const handleImages = () => {
    setShowImages(!showImages)
  }

  useEffect(() => {
    setShowImages(false)
  }, [id])

  return (
    <div key={id} className='w-full flex items-center flex-col gap-x-6'>
        <div className='w-[450px] flex flex-col my-7 font-normal text-sm'>
          {
            projet.image.length > 0 &&
            <div className="w-full relative duration-100">
            <img className="w-full aspect-video rounded-lg" src={projet.image[0]} alt="ilustration du projet"/>
            <div className='w-full h-full rounded-lg bg-gradient-to-t from-black to-transparent absolute top-0 left-0 opacity-70'></div>
            <Link to={'/Projets/' + id + '/images'}>
              <button onClick={handleImages} className='border-2 border-cardI hover:bg-cardI text-zinc-300 absolute top-44 left-1/2 -translate-x-1/2
              p-2 px-4 duration-75'>Voir plus →</button>
            </Link>
          </div>
          }

          <p className='text-zinc-300 text-xl mt-8 mb-6'>{projet.titre}</p>
          <table>
            <tbody>
              <tr>
                <td className="text-textC align-top pr-6">Client</td>
                <td className="text-zinc-300 align-top">{projet.client}</td>
              </tr>
              <tr>
                <td className="text-textC align-top pr-6">Timeline</td>
                <td className="text-zinc-300 align-top">{projet.timeline}</td>
              </tr>
              <tr>
                <td className="text-textC align-top pr-6">Rôle</td>
                <td className="text-zinc-300 align-top">{projet.role}</td>
              </tr>
              <tr>
                <td className="text-textC align-top pr-6">Résultat</td>
                <td className="text-zinc-300 align-top">{projet.resultat}</td>
              </tr>
            </tbody>
          </table>
          <p className='text-zinc-300 mt-6'>{projet.contenu}</p>
          {
            projet.contenu_part2 &&
            <p className='text-zinc-300 mt-4'>{projet.contenu_part2}</p>
          }
          {
            projet.contenu_part3 &&
            <p className='text-zinc-300 mt-4'>{projet.contenu_part3}</p>
          }
        </div>
      </div>
  )
}

export default ProjetContent
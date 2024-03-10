import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function VeilleContent({veille, id}) {

  const [showImages, setShowImages] = useState(false)

  const handleImages = () => {
    setShowImages(!showImages)
  }

  useEffect(() => {
    setShowImages(false)
  }, [id])

  return (
    <div className='w-full flex items-center flex-col gap-x-6'>
      <div className='w-[450px] flex flex-col my-7 font-normal text-sm gap-5'>
         
         {veille.images.length > 0 &&
         <div className="w-full relative duration-100">
            <img className="w-full aspect-video rounded-lg" src={veille.images[0]} alt="ilustration du projet"/>
            <div className='w-full h-full rounded-lg bg-gradient-to-t from-black to-transparent absolute top-0 left-0 opacity-70'></div>
            <Link to={'/Veille/' + id + '/images'}>
              <button onClick={handleImages} className='border-2 border-cardI hover:bg-cardI text-zinc-300 absolute top-44 left-1/2 -translate-x-1/2
              p-2 px-4 duration-75'>Voir plus →</button>
            </Link>
          </div>
         }
          

          <p className=' text-base'>{veille.date}</p>
          <h2 className='text-xl text-zinc-300 leading-6'>{veille.title}</h2>
          <p className='w-fit text-xs border border-zinc-700 rounded-md p-1'>{veille.theme}</p>
          {
            veille.contenu?.map((paragraphe, i) => {
              return (
                <p key={i} className='text-zinc-300 mb-1'>{paragraphe}</p>
              )
            })
          }
      </div>
    </div>
  )
}

export default VeilleContent
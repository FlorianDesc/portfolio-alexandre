import React from 'react'
import { Link } from 'react-router-dom'

function SideBarVeille({data, veilleId}) {

    const veilleData = [...data]

  return (
    <div className='flex flex-col items-center w-[400px] ml-16 border-r-2 border-zinc-700 border-opacity-40 px-3 pt-5 font-normal text-sm min-h-screen'>
        <div className='w-full max-h-full overflow-y-auto'>
            <p className='w-full text-start text-zinc-300 px-3'>Veille</p>
            <p className='text-textC pl-3 mt-7'>Séléctionné</p>
            <Link to={"/Veille/" + veilleId}>
                <div className='w-full h-fit bg-cardI px-3 mt-3 hover:bg-cardI hover:cursor-pointer text-zinc-300 rounded-lg p-1'>
                    <p>{veilleData[veilleId].title}</p>
                    <p className='text-textC'>{veilleData[veilleId].date}</p> 
                    <p className='w-fit text-xs border border-zinc-700 rounded-md p-1'>{veilleData[veilleId].theme}</p>
                </div>
            </Link>
            <p className='text-textC pl-3 mt-7'>Autres articles</p>
            {
                veilleData.filter((article) => article.id != veilleId).map((article) => {
                    return (
                        <Link key={article.id} to={"/Veille/" + article.id}>
                            <div className='w-full h-fit px-3 mt-3 hover:bg-cardI hover:cursor-pointer text-zinc-300 rounded-lg p-1'>
                                <p>{article.title}</p>
                                <p className='text-textC'>{article.date}</p>
                                <p className='w-fit text-xs border border-zinc-700 rounded-md p-1'>{article.theme}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default SideBarVeille
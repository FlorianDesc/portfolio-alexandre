import React from 'react'
import { Link } from 'react-router-dom'
import { nbArticle } from '../Data/nbInfoNav'


function VeilleSectionAccueil({data}) {

    const veilleData = [...data]

    return (
        <div className='flex flex-col gap-3 mb-4'>
            {
                veilleData.slice(0, 3).map((article) => {
                    return (
                        <Link key={article.id} to={"/Veille/" + article.id}>
                            <div className='w-full hover:bg-cardI hover:cursor-pointer rounded-lg'>
                                <div className='flex p-2 justify-between'>
                                    <div className='flex flex-col'>
                                        <p className='text-zinc-300'>{article.title}</p>
                                        <p className=' w-fit p-1 text-xs rounded-md border border-zinc-700 mt-1'>{article.theme}</p>
                                    </div>
                                    <p>{article.date}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default VeilleSectionAccueil
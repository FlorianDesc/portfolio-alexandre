import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { nbArticle } from '../Data/nbInfoNav'
import { useState } from 'react'

function SidebarProjet({data, projectId}) {

    const filtres = ["Tous", "UE-1", "UE-2", "UE-3", "UE-4", "UE-5", "UE-6"]

    const [projectData, setProjetsData] = useState([...data])

    const [filters, setFilters] = useState([0])

    const handleFilter = (i) => {
        const copyFilter = [...filters]

        if(copyFilter.length === 1 && copyFilter.includes(i)){
            return
        }

        if((copyFilter.includes(0) && i !== 0) || (i === 0 && copyFilter.filter((elem) => {return elem > 0}).length > 0)){
            copyFilter.splice(0, copyFilter.length)
            copyFilter.push(i) 
        }
        else if(copyFilter.includes(i)){
            copyFilter.splice(copyFilter.findIndex((elem) => {return elem === i}), 1)
        }
        else{
            copyFilter.push(i)
        }
        setFilters(copyFilter)
    }

    

    const newDataProjectWithFilter = (filters) => {

        if(filters.includes(0)){
            setProjetsData([...data])
            return
        }

        const newProjects = [...data].filter((projet) => {
            return projet.competence.some((competence) => filters.includes(competence))
        })

        setProjetsData(newProjects)
    }

    useEffect(() => {
        newDataProjectWithFilter(filters)
    }, [filters])


  return (
    <div className='sidebar-project-fadeIn flex flex-col items-center w-[400px] ml-16 border-r-2 border-zinc-700 border-opacity-40 px-3 pt-5 font-normal text-sm min-h-screen'>
        <div className='w-full max-h-full overflow-y-auto'>
            <p className='w-full text-start text-zinc-300 px-3'>Projets</p>
            <p className='text-textC pl-3 mt-7'>Filtres</p>
            <div className='mt-3'>
           {
                filtres.map((competence, i) => {
                    return (
                        <button key={i} onClick={() => {handleFilter(i)}} className={`hover:bg-cardI first-letter:w-fit text-xs border border-zinc-700 rounded-md p-1 mr-2 mb-2 ${filters.includes(i) ? "bg-cardI" : ""}`}>{ competence}</button>
                    )
                })
            }
            </div>
            <p className='text-textC pl-3 mt-7'>Séléctionné</p>
            <Link to={"/Projets/" + projectId}>
                <div className='w-full h-fit bg-cardI px-3 mt-2 hover:bg-cardI hover:cursor-pointer text-zinc-300 rounded-lg p-1'>
                    <p>{data[projectId].titre}</p>
                    <p className='text-textC mb-[5px]'>{data[projectId].sousTitre}</p>
                    <div className='flex gap-1'>
                    {
                        data[projectId].competence.map((competence, i) => {
                            return (
                                <p key={i} className='w-fit text-xs border border-zinc-700 rounded-md p-1 px-2'>{competence}</p>
                            )
                        })
                    }
                    </div>
                </div>
            </Link>
            <p className='text-textC pl-3 mt-7'>Autres projets</p>
            {
                projectData.filter((project) => project.id != projectId).map((project) => {
                    return (
                        <Link key={project.id} to={"/Projets/" + project.id}>
                            <div className='w-full h-fit px-3 mt-2 hover:bg-cardI hover:cursor-pointer text-zinc-300 rounded-lg p-1'>
                                <p>{project.titre}</p>
                                <p className='text-textC mb-[5px]'>{project.sousTitre}</p>
                                <div className='flex gap-1'>
                                {
                                    project.competence.map((competence, i) => {
                                        return (
                                            <p key={i} className='w-fit text-xs border border-zinc-700 rounded-md p-1 px-2'>{competence}</p>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default SidebarProjet
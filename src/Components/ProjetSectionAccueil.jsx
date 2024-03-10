import React from 'react'
import { Link } from 'react-router-dom'

function ProjetSectionAccueil({data}) {

    const projetsData = [...data]

  return (
        <div className='flex flex-col gap-3 mb-4'>
        {
            projetsData.slice(0, 2).map((projet) => {
                return (
                    <Link to={"/Projets/" + projet.id} key={projet.id}>
                        <div className='flex flex-col justify-evenly items-center w-full bg-btn hover:bg-cardI rounded-lg hover:cursor-pointer'>
                            <div className='flex w-full my-2'>
                                {
                                    projet.id % 2 === 0 ?
                                    <FirstSvg />
                                    :
                                    <SecondSvg />
                                }
                                <p className='w-full text-zinc-300 text-left'>{projet.titre}</p>
                            </div>
                            <div className='w-[97%] h-[85%] rounded-lg overflow-hidden mb-[6px]'>
                                <img className='w-full h-full object-cover hover:scale-105 animate-[scale] duration-200' src={projet.image[0]} alt="illustration du projet" />
                            </div>
                        </div>
                    </Link>
                )
            })
        }
        </div>                   
  )
}

export function FirstSvg(){
    return (
        <svg className="mx-2" width="20" height="20" fill="#d4d4d8" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#d4d4d8"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M229.92236,70.81226c-.0249-.04541-.04345-.09229-.06933-.13746-.01123-.01953-.02442-.03662-.03565-.0559a15.989,15.989,0,0,0-5.97314-5.8855l-88-49.5a16.09272,16.09272,0,0,0-15.68848,0l-88,49.5A15.99092,15.99092,0,0,0,26.168,70.64575c-.01563.0271-.03369.05127-.04883.07862-.02441.0437-.042.08886-.06543.13256A15.98294,15.98294,0,0,0,24,78.67871v98.64258a16.02048,16.02048,0,0,0,8.15576,13.94531l88.00049,49.5a15.97122,15.97122,0,0,0,7.24463,2.02222c.17871.01343.35693.03052.53906.032.02393.00049.04785.00049.07178.00049.25146,0,.499-.01465.74463-.03735a15.97135,15.97135,0,0,0,7.08789-2.01734l88-49.5A16.02048,16.02048,0,0,0,232,177.32129V78.67871A15.98584,15.98584,0,0,0,229.92236,70.81226ZM128.91016,118.821,48.37891,73.96558,128,29.17871l79.74365,44.856ZM216,177.32129l-79.87891,44.93188.78711-89.57421L216,87.74561Z"></path> </g></svg>
    )
}

export function SecondSvg(){
    return (
        <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M13 1L13.001 4.06201C16.6192 4.51365 19.4869 7.38163 19.9381 11L23 11V13L19.938 13.001C19.4864 16.6189 16.6189 19.4864 13.001 19.938L13 23H11L11 19.9381C7.38163 19.4869 4.51365 16.6192 4.06201 13.001L1 13V11L4.06189 11C4.51312 7.38129 7.38129 4.51312 11 4.06189L11 1H13ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z" fill="#d4d4d8"></path></svg>
    )
}

export default ProjetSectionAccueil
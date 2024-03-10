import React, { useRef } from 'react'
import profil from '../assets/profil.png'
import { projetsData } from '../Data/Projet'
import { Link } from 'react-router-dom'
import VeilleSectionAccueil from '../Components/VeilleSectionAccueil'
import ProjetSectionAccueil from '../Components/ProjetSectionAccueil'
import { veilleData } from '../Data/Veille'

function Accueil() {

    const btnCopyEmail = useRef(null)

    const handleCopyEmail = () => {
        const email = "ernandezalexandre@gmail.com"
        navigator.clipboard.writeText(email)
        .catch(err => {
            console.error('Erreur lors de la copie : ', err)
        })

        btnCopyEmail.current.children[0].classList.replace("block", "hidden")
        btnCopyEmail.current.children[1].classList.replace("hidden", "block")
        const interv = setInterval(() => {
            btnCopyEmail.current.children[0].classList.replace("hidden", "block")
            btnCopyEmail.current.children[1].classList.replace("block", "hidden")
            clearInterval(interv)
        }, 2000)
        
    }

    const time = new Date()
    const hours = time.getHours()
    const min = time.getMinutes()<10 ? "0" + time.getMinutes() : time.getMinutes()

    return (
        <div className='w-full min-h-screen flex justify-center bg-mainC text-textC overflow-x-hidden font-normal text-sm'>
            <div className='w-[800px] flex items-center flex-col ml-16 mb-12 gap-x-6'>

                <div id="time-fadeIn" className='my-7 tracking-widest opacity-0 translate-y-[5px]'>{hours}:{min}</div>
                <img id="profil-fadeIn" className="w-12 mb-3 opacity-0 translate-y-[5px]" src={profil} alt="photo de profil"/>
                <p id="name-fadeIn" className='text-2xl font-normal text-zinc-100 opacity-0 translate-y-[5px]'>Alexandre Ernandez</p>
                <p id="job-fadeIn" className='text-lg opacity-0 translate-y-[5px]'>Administrateur réseau</p>

                <div id="svg-fadeIn" className='opacity-0 translate-y-[5px] flex my-5 gap-7'>

                    <a className="relative" href="#">
                        <svg className="hover:stroke-zinc-100 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <div className='cardInfoHeader absolute bg-cardI text-zinc-400 px-2 rounded top-[120%] left-[-75%] hidden z-10 text-sm tracking-tighter font-medium'>Github</div>
                    </a>

                    <a className="relative" href="https://www.linkedin.com/in/alexandre-ernandez/">
                        <svg className="hover:fill-zinc-100 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256" fill="#71717a">
                            <g  fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                <g transform="scale(5.12,5.12)">
                                    <path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM14,11.01172c-1.09522,0 -2.08078,0.32736 -2.81055,0.94141c-0.72977,0.61405 -1.17773,1.53139 -1.17773,2.51367c0,1.86718 1.61957,3.32281 3.67969,3.4668c0.0013,0.00065 0.0026,0.0013 0.00391,0.00195c0.09817,0.03346 0.20099,0.05126 0.30469,0.05273c2.27301,0 3.98828,-1.5922 3.98828,-3.52148c-0.00018,-0.01759 -0.00083,-0.03518 -0.00195,-0.05274c-0.10175,-1.90023 -1.79589,-3.40234 -3.98633,-3.40234zM14,12.98828c1.39223,0 1.94197,0.62176 2.00195,1.50391c-0.01215,0.85625 -0.54186,1.51953 -2.00195,1.51953c-1.38541,0 -2.01172,-0.70949 -2.01172,-1.54492c0,-0.41771 0.15242,-0.7325 0.47266,-1.00195c0.32023,-0.26945 0.83428,-0.47656 1.53906,-0.47656zM11,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-5.86523v-13.13477c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM20,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10c0,-0.82967 0.22639,-1.65497 0.625,-2.19531c0.39861,-0.54035 0.90147,-0.86463 1.85742,-0.84766c0.98574,0.01695 1.50758,0.35464 1.90234,0.88477c0.39477,0.53013 0.61523,1.32487 0.61523,2.1582v10c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10.73828c0,-2.96154 -0.87721,-5.30739 -2.38086,-6.89453c-1.50365,-1.58714 -3.59497,-2.36719 -5.80664,-2.36719c-2.10202,0 -3.70165,0.70489 -4.8125,1.42383v-0.42383c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM12,21h4v12.13477v4.86523h-4zM21,21h4v1.56055c0.00013,0.43 0.27511,0.81179 0.68291,0.94817c0.40781,0.13638 0.85714,-0.00319 1.11591,-0.34661c0,0 1.57037,-2.16211 5.01367,-2.16211c1.75333,0 3.25687,0.58258 4.35547,1.74219c1.0986,1.15961 1.83203,2.94607 1.83203,5.51953v9.73828h-4v-9c0,-1.16667 -0.27953,-2.37289 -1.00977,-3.35352c-0.73023,-0.98062 -1.9584,-1.66341 -3.47266,-1.68945c-1.52204,-0.02703 -2.77006,0.66996 -3.50195,1.66211c-0.73189,0.99215 -1.01562,2.21053 -1.01562,3.38086v9h-4z"></path>
                                </g>
                            </g>
                        </svg>
                        <div className='cardInfoHeader absolute bg-cardI text-zinc-400 px-2 rounded top-[120%] left-[-120%] hidden z-10 text-sm tracking-tighter font-medium'>Linked'in</div>
                    </a>
                </div>

                <section className='flex gap-4 relative'>
                    <button id="contact-fadeIn" className='bg-zinc-100 text-zinc-950 rounded text-sm font-semibold px-5 py-1 shadow-[2px_2px_5px_rgba(244,_244,_245,_0.2)] opacity-0 -translate-x-[10px]'>Contactez moi ✉</button>
                    <p id="ou-fadeIn" className='text-sm opacity-0 translate-x-[5px]'>ou</p>
                    <button id="mail-fadeIn" onClick={handleCopyEmail} ref={btnCopyEmail} className="hover:bg-cardI bg-btn text-zinc-100 rounded text-sm font-normal px-5 py-1 shadow-[0_2px_5px_rgba(_43,_43,_46,_0.7)] flex opacity-0 -translate-x-[10px]">Copier email&nbsp;<i className="fa fa-clone block leading-5" aria-hidden="true"></i><i className="fas fa-check hidden w-[14px] leading-5"></i></button>
                </section>

                <div id="a-propos-fadeIn" className="opacity-0 translate-y-[5px] flex mt-12 font-normal leading-5 w-[800px]">
                    <div className="text-textC w-2/12 text-end mr-10">A propos</div>
                    <div className="text-zinc-300 w-7/12"> Actuellement en première année de BTS dans le milieu du réseaux informatique, en filière SIO.
                    <br></br><br></br> Je suis à la recherche d'une entreprise pour effectuer un stage afin d'accroitre mes connaissances mais aussi l'obtention de mon diplôme.<br></br><br></br>
                    Passionné et motivé sont les mots pour me décrire.</div>
                </div>

                <div id="projet-fadeIn" className='opacity-0 translate-y-[5px] flex mt-12 font-normal leading-5 w-[800px]'>
                    <div className="text-textC w-2/12 text-end mr-10 p-2">Projets</div>
                    <div className='flex flex-col w-7/12'>
                        <ProjetSectionAccueil data={projetsData}/>
                        <BtnVoirTout pathname="/Projets/0"/>
                    </div>
                </div>

                <div id="veille-fadeIn" className='opacity-0 translate-y-[5px] flex mt-12 font-normal leading-5 w-[800px]'>
                    <div className="text-textC w-2/12 text-end mr-10 p-2">Veille</div>
                    <div className='flex flex-col w-7/12'>
                        <VeilleSectionAccueil data={veilleData}/>
                        <BtnVoirTout pathname="/Veille/0"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export function BtnVoirTout({pathname}){
    return (
        <Link to={pathname}>
            <div className='flex justify-center items-center bg-btn hover:bg-cardI w-full mx-auto rounded-md h-8'>
                <p className='text-zinc-300'>Voir tout&nbsp;</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#71717a"></path></svg>
            </div>
        </Link>
    )
}

export default Accueil
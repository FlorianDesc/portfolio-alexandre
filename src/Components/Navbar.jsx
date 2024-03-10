import { navData } from "../Data/Nav"
import { nbArticle } from "../Data/nbInfoNav";
import { Link, useLocation } from "react-router-dom"
import { useRef } from "react";

function Navbar() {

    const pagePath = useLocation()

    const listItemRef = useRef(null)

    const changeColor = (i) => {
        const svg = document.querySelectorAll(".svg")
        svg.forEach((elem,index) => {
            if(index === i){
                elem.children[0].setAttribute('stroke', 'white')
                if(elem.classList.contains('strokeSVG')){
                    elem.classList.remove('strokeSVG')
                }
            }
            else{
                elem.children[0].setAttribute('stroke', '#71717a')
                if(!elem.classList.contains('strokeSVG')){
                    elem.classList.add('strokeSVG')
                }
            }
        })
    }

    return (
        <div className='flex justify-center items-center w-16 h-screen bg-mainC border-r-2 border-zinc-700 border-opacity-40 fixed'>
            <ul className="flex flex-col justify-evenly">             
                {
                    navData.map((elem, i) => {
                        return (
                            <Link to={elem.link} key={i}>
                                <li onClick={() => {changeColor(i)}} ref={listItemRef} className="my-3 relative">
                                    <svg
                                        className={elem.link === pagePath.pathname ? "svg hover:cursor-pointer" : "svg strokeSVG hover:cursor-pointer"}
                                        xmlns={elem.xmlns} 
                                        width={elem.width} 
                                        height={elem.height} 
                                        viewBox={elem.viewBox}>
                                        <path
                                            d={elem.path.d} 
                                            fill={elem.path.fill} 
                                            stroke={elem.link === pagePath.pathname ? "white" : elem.path.stroke} 
                                            strokeWidth={elem.path.strokeWidth} 
                                            strokeLinecap={elem.path.strokeLinecap} 
                                            strokeLinejoin={elem.path.strokeLinejoin}>
                                        </path>
                                    </svg>
                                    <div className='cardInfoNav opacity-0 translate-x-[-200%] flex items-center absolute bg-cardI text-zinc-400 px-2 rounded top-[5%] left-9 z-50 text-sm tracking-tighter font-medium w-fit h-6'>{elem.name}
                                        {
                                            nbArticle[elem.name.toLowerCase()] &&
                                            <div className="bg-zinc-700 w-fit h-4 pl-1 pr-[6px] text-center relative ml-2 leading-4 rounded-sm">{nbArticle[elem.name.toLowerCase()]}</div>
                                        }
                                    </div>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Navbar
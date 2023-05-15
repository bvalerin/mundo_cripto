"use client";

import { useState } from "react"
import Link from "next/link"
import logo from '../../public/img/logo.svg'
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faMessage, faUser, faUserEdit } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
    
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link href="/" className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                        <Image src={logo}  width={70} height={32} alt="logo" />
                    </Link>
                    <button type="button" className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        onClick={() => setNavbarOpen(!navbarOpen)} >
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: 30, color: "black" }} />
                    </button>
                </div>
            <div className={"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" + (navbarOpen ? " block" : " hidden") }>
                <ul className="flex flex-col lg:flex-row list-none mr-auto">
                <li className="flex items-center">
                        <Link href="/" className="bg-blueGray-700 text-red active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" >
                            <FontAwesomeIcon icon={faHome} style={{ fontSize: 15, color: "grey" }} className="mr-2" />
                            Inicio 
                        </Link>
                    </li>
                </ul>

                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                    <li className="flex items-center">
                        <Link href="https://chat.whatsapp.com/ImoQpGWRz1eGAiYDobTKkf" target="_blank" className="bg-blueGray-100 active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" >
                            <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="whatsapp"><path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path></svg>
                        </Link>
                    </li>

                    <li className="flex items-center">
                        <Link href="/" className="bg-blueGray-700 text-red active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" >
                            <FontAwesomeIcon icon={faUserEdit} style={{ fontSize: 15, color: "grey" }} className="mr-2" />
                            Registrarme 
                        </Link>
                    </li>

                    <li className="flex items-center">
                        <Link href="/" className="bg-blueGray-700 text-red active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" >
                            <FontAwesomeIcon icon={faUser} style={{ fontSize: 15, color: "grey" }} className="mr-2" />
                            Inicar Sesion 
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
  }
  
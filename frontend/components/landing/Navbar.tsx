"use client";

import { useState } from "react"
import Link from "next/link"
import logo from '../../public/img/logo.svg'
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faUser, faUserEdit } from "@fortawesome/free-solid-svg-icons";


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
  
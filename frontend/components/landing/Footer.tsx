import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
      <footer className="relative bg-gray-200 pt-8 pb-6">

        <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style={{ transform: "translateZ(0)" }} >
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0" ><polygon className="text-gray-800 fill-current" points="2560 0 2560 100 0 100"></polygon></svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Te interesa el mundo de las criptomonedas?</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Te dejamos enlaces que te pueden ser de mucha utilidad!
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">

                <Link href="https://chat.whatsapp.com/ImoQpGWRz1eGAiYDobTKkf" target="_blank">
                        <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button" >
                            <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: 20, color: "green" }} />
                        </button>
                </Link>

                <Link href="#">
                        <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button" >
                            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 20, color: "blue" }} />
                        </button>
                </Link>

                <Link href="https://github.com/bvalerin/mundo_cripto" target="_blank">
                    <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button" >
                        <FontAwesomeIcon icon={faGithub} style={{ fontSize: 20, color: "black" }} />
                    </button>
                </Link>

              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Enlaces Útiles
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Otros Recursos
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} With Love by{" "}
                <a
                  href="#"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Asystec Team
                </a>
                .
              </div>
            </div>
          </div>
        </div>

      </footer>
  );
}

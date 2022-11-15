import React, { useState } from 'react'
import './Navbar.css'
import Link from '../Link/Link'
import Modal from '../Wallet/Modal'

export default function Navbar () {
  const [showModal, setShowModal] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <nav className='bg-white border-gray-200 px-2 sm:px-16 py-2.5 rounded dark:bg-gray-900'>

            <div className='container flex flex-wrap justify-between items-center mx-auto'>
              <Link href='/' className='flex items-center'>
                  <img src={'/images/logo.png'} className='h-6 sm:h-9 max-md:pl-10'alt='Meta-bnb'></img>
              </Link>

              <div className='hidden lg:flex md:order-2'>
                  <button type='button' className='text-white bg-purple hover:bg-[purple] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0' onClick={() => setShowModal(true)}>
                      Connect Wallet
                  </button>
                  <Modal 
                  visible={showModal}
                  onClose={() => setShowModal(false)}
                  />
              </div>

              <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
                  <ul className='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                    <li>
                      <Link href="/" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-[purple] rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
                    </li>
                    <li>
                      <Link href="/places" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[purple] md:p-0">Place to stay</Link>
                    </li>
                    <li>
                      <Link href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-[purple] md:hover:bg-transparent md:hover:text-[purple] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">NFTs</Link>
                    </li>
                    <li>
                      <Link href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-[purple] md:hover:bg-transparent md:hover:text-[purple] md:p-0">Community</Link>
                    </li>
                  </ul>
              </div>
            </div>


            <section className='flex lg:hidden'>

              <div 
              className='space-y-2 absolute top-[3%] right-[5%]'
              onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>

                <div className='absolute top-0 right-0 px-8 py-8'
                onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>

                <ul className='flex flex-col items-center gap-8'>
                  <li>
                    <Link href="/" className="text-gray-700 hover:text-[purple]">Home</Link>
                  </li>
                  <li>
                    <Link href="/places" className="text-gray-700 hover:text-[purple]">Place to stay</Link>
                  </li>
                  <li>
                    <Link href="/" className="text-gray-700 hover:text-[purple]">NFTs</Link>
                  </li>
                  <li>
                    <Link href="/" className="text-gray-700 hover:text-[purple]">Community</Link>
                  </li>
                </ul>

                <div className='flex md:order-2'>
                  <button type='button' className='text-white bg-purple hover:bg-[purple] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0' onClick={() => setShowModal(true)}>
                      Connect Wallet
                  </button>
                  <Modal 
                  visible={showModal}
                  onClose={() => setShowModal(false)}
                  />
                </div>

              </div>
            </section>
        </nav>
    )
}
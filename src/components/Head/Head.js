import React from "react";

export default function Head () {
    return (
        <header>
            <div className="flex sm:flex-wrap px-3 pl-4 py-28">
            <div className="w-7/12 sm:w-11/12 sm:items-center text-left pl-14">
              <div className="text-6xl sm:text-5xl text-[#434343] font-bold ">Rent a <span className="text-purple">Place</span> away from  
                <span className="text-purple"> Home</span> in the 
                <span className="text-purple"> Metaverse</span>
              <div className="text-2xl w-11/12 pt-12">
                we provide you access to luxury and affordable houses in the metaverse, 
                get a chance to turn your imagination to reality at your comfort zone
              </div>
              <form className="pt-12">
                <input type='text' size='40' placeholder="Search for a location" className="font-normal sm:w-7/12 text-sm border border-[#A3A3A3] focus:outline-none rounded-l-lg bg-[rgba(247, 247, 247, 0.1);] py-4 px-4"></input>
                <button type="submit" className="font-normal text-sm text-white bg-purple rounded-r-lg py-4 w-40">Search</button>
              </form>
              </div>
            </div>
            <div className="sm:w-1/2 sm:mx-auto sm:mt-10"><img src={'/images/hero.png'} alt='hero'></img>
            </div>
            </div>
            <div className="flex justify-between bg-purple px-36 sm:flex-col">
                <img src="/images/token.svg" alt="token" className="sm:py-4"></img>
                <img src="/images/mask.svg" alt="mask" className="sm:py-4"></img>
                <img src="/images/sea.svg" alt="sea" className="sm:py-4"></img>
            </div>
        </header>
    )
}
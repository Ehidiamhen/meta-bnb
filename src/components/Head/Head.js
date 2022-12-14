import React from "react";

export default function Head () {
    return (
        <header>
            <div className="flex max-xl:flex-wrap px-3 pl-4 py-28">
              <div className="w-7/12 max-md:w-11/12 max-md:items-center text-left pl-14 max-md:pl-6">
                <div className="text-6xl max-md:text-5xl text-[#434343] font-bold ">Rent a <span className="text-purple">Place</span> away from  
                  <span className="text-purple"> Home</span> in the 
                  <span className="text-purple"> Metaverse</span>
                  <div className="text-2xl w-11/12 pt-12 max-sm:font-normal max-sm:text-xl">
                    we provide you access to luxury and affordable houses in the metaverse, 
                    get a chance to turn your imagination to reality at your comfort zone
                  </div>
                  <form className="pt-12">
                    <input type='text' size='40' placeholder="Search for a location" className="font-normal max-md:w-7/12 max-[510px]:w-1/2 text-sm border border-[#A3A3A3] focus:outline-none rounded-l-lg bg-[rgba(247, 247, 247, 0.1);] py-4 px-4"></input>
                    <button type="submit" className="font-normal text-sm text-white bg-purple rounded-r-lg py-4 w-40 max-[510px]:w-24">Search</button>
                  </form>
                </div>
              </div>
            <div className="max-xl:w-1/2 max-xl:mx-auto max-xl:mt-10"><img src={'/images/hero.png'} alt='hero'></img>
            </div>
            </div>
            <div className="flex justify-between bg-purple px-36 py-6 max-md:overflow-scroll max-md:px-10">
                <img src="/images/token.svg" alt="token" className="max-md:mr-10"></img>
                <img src="/images/mask.svg" alt="mask" className="max-md:mr-10"></img>
                <img src="/images/sea.svg" alt="sea"></img>
            </div>
        </header>
    )
}
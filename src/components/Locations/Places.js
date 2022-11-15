import React from "react";
import Place from "./Template";

export default function Places () {
    return (
        <>
            <div className="ml-16">
                <div className="flex justify-between max-md:items-center text-[#434343] mt-24">
                    <ul className="flex justify-between max-md:hidden">
                        <li className="block py-2 pr-16">Restaurant</li>
                        <li className="block py-2 pr-16">Cottage</li>
                        <li className="block py-2 pr-16">Castle</li>
                        <li className="block py-2 pr-16">fantast city</li>
                        <li className="block py-2 pr-16">beach</li>
                        <li className="block py-2 pr-16">Carbins</li>
                        <li className="block py-2 pr-16">Off-grid</li>
                        <li className="block py-2 pr-16">Farm</li>
                    </ul>
                    <div className="max-md:hidden mr-24 mb-12 border border-[#B4B4B4] rounded-lg px-4 py-4">
                        <p className="inline mr-10">Locations</p>
                        <img className="inline" src={'/images/locations/select.png'} alt='select'></img>
                    </div>

                    <select className="md:hidden mr-24 mb-12 border border-[#B4B4B4] rounded-lg outline-none h-12 w-36">
                        <option value="Restaurant">Restaurant</option>
                        <option value="Cottage">Cottage</option>
                        <option value="Castle">Castle</option>
                        <option value="fantast city">fantast city</option>
                        <option value="beach">beach</option>
                        <option value="Carbins">Carbins</option>
                        <option value="Off-grid">Off-grid</option>
                        <option value="Farm">Farm</option>
                    </select>
                    <div className="md:hidden mr-24 mb-12 px-4 py-4">
                        <img className="" src={'/images/locations/location.svg'} alt='select'></img>
                    </div>
                </div>

                <div className="flex max-md:flex-wrap">
                    <Place 
                      src={'/images/locations/place-1.png'}
                    />
                    <Place 
                      src={'/images/locations/place-2.png'}
                    />
                    <Place 
                      src={'/images/locations/place-3.png'}
                    />
                    <Place 
                      src={'/images/locations/place-4.png'}
                    />
                </div>
                <div className="flex max-md:flex-wrap">
                    <Place 
                      src={'/images/locations/place-5.png'}
                    />
                    <Place 
                      src={'/images/locations/place-6.png'}
                    />
                    <Place 
                      src={'/images/locations/place-7.png'}
                    />
                    <Place 
                      src={'/images/locations/place-8.png'}
                    />
                </div>
                <div className="flex max-md:flex-wrap">
                    <Place 
                      src={'/images/locations/place-9.png'}
                    />
                    <Place 
                      src={'/images/locations/place-10.png'}
                    />
                    <Place 
                      src={'/images/locations/place-11.png'}
                    />
                    <Place 
                      src={'/images/locations/place-12.png'}
                    />
                </div>
                <div className="flex mb-7 max-md:flex-wrap">
                    <Place 
                      src={'/images/locations/place-13.png'}
                    />
                    <Place 
                      src={'/images/locations/place-14.png'}
                    />
                    <Place 
                      src={'/images/locations/place-15.png'}
                    />
                    <Place 
                      src={'/images/locations/place-16.png'}
                    />
                </div>
            </div>
        </>
    )
}
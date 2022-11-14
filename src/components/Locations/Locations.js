import React from "react";
import Place from "./Template";

export default function Locations () {
    return (
        <>
            <p className="font-bold text-5xl max-md:text-3xl max-md:mx-16 py-14">Inspiration for your next adventure</p>
            <div className="ml-16">
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
                <div className="flex mb-7 max-md:flex-wrap">
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
            </div>
        </>
    )
}
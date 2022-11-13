import React from "react";
import Place from "./Template";

export default function Locations () {
    return (
        <>
            <p className="font-bold text-5xl py-14">Inspiration for your next adventure</p>
            <div className="ml-16">
                <div className="flex">
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
                <div className="flex mb-7">
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
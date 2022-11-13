import React from "react";
import Place from "./Template";

export default function Places () {
    return (
        <>
            <div className="ml-16">
                <div className="flex">
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
                <div className="flex">
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
                <div className="flex mb-7">
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
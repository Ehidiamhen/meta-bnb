import React from "react";

export default function Place (props) {
    const{
        src,
        alt,
    } = props
    return (
        <div className="border rounded-2xl w-72 px-4 mr-6 py-4 mb-6 text-xs text-[#434343]">
            <img src={src} alt={alt}></img>
            <div className="flex justify-between pt-4 py-2">
              <p className="">Desert king</p>
              <p className="font-bold">1MBT per night</p>
            </div>
            <div className="flex justify-between">
              <p className="pb-2">2345km away</p>
              <p className="">available for 2weeks stay</p>
            </div>
            <img src={'/images/locations/rating.png'} alt=""></img>
        </div>
    )
}
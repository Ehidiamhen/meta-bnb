import React from "react";

export default function Place (props) {
    const{
        src,
        alt,
    } = props
    return (
        <div className="border">
            <img src={src} alt={alt}></img>
            <div>
              <p>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <img src="" alt=""></img>
        </div>
    )
}
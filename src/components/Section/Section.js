import React from "react";

export default function Section () {
    return (
        <div className=" flex bg-purple text-white px-36 py-24 max-md:flex-wrap max-md:py-px">
            <div className="w-2/5 max-md:w-screen pt-8 text-left">
                <p className="text-5xl font-bold my-8">Metabnb NFTs</p>
                <p className="text-lg leading-9">
                    Discover our NFT gift cards collection. Loyal customers gets 
                    amazing gift cards which are traded as NFTs. These NFTs gives our 
                    cutomer access to loads of our exclusive services.
                </p>
                <button className="bg-white text-purple  text-base mt-14 max-md:mt-4 py-4 px-8 rounded-lg">Learn More</button>
            </div>
            <div className="max-md:mb-8">
                <img src="/images/NFTs.png" alt="NFTs"></img>
            </div>
        </div>
    )
}
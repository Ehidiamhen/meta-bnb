import React from "react";

export default function Footer () {
    return (
        <div className="bg-[#1D1D1E] px-28 max-md:px-16 pt-14 text-[#F1F3F9] text-left">
          <div className="flex justify-between max-md:flex-col">
            <div className="max-md:mb-10">
                <img src="/images/footer-logo.svg" alt="Meta-bnb"></img>
                <div className="flex justify-between pt-24 w-32">
                  <img src="/images/facebook.png" alt="facebook"></img>
                  <img src="/images/instagram.png" alt="instagram"></img>
                  <img src="/images/twitter.png" alt="twitter"></img>
                </div>
            </div>
            <div className="max-md:mb-10">
                <p className="font-bold text-lg pb-4 max-md:pb-px">Community</p>
                <ul>
                    <li className="text-sm leading-9">NFT</li>
                    <li className="text-sm leading-9">Tokens</li>
                    <li className="text-sm leading-9">Landlords</li>
                    <li className="text-sm leading-9">Discord</li>
                </ul>
            </div>
            <div className="max-md:mb-10">
                <p className="font-bold text-lg pb-4 max-md:pb-px">Places</p>
                <ul>
                    <li className="text-sm leading-9">Castle</li>
                    <li className="text-sm leading-9">Farms</li>
                    <li className="text-sm leading-9">Beach</li>
                    <li className="text-sm leading-9">Learn more</li>
                </ul>
            </div>
            <div>
                <p className="font-bold text-lg pb-4 max-md:pb-px">About us</p>
                <ul>
                    <li className="text-sm leading-9">Road map</li>
                    <li className="text-sm leading-9">Creators</li>
                    <li className="text-sm leading-9">Career</li>
                    <li className="text-sm leading-9">Contact us</li>
                </ul>
            </div>
            </div>
            <p className="py-9 max-md:pt-4">&copy; 2022 Metabnb</p>
        </div>
    )
}
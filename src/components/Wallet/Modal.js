import React from "react";

export default function Modal ({children, visible, onClose}) {
    if (!visible) return null;

    const handleOnBackDropClick = (e) => {
        if (e.target.id === "backdrop") onClose && onClose();
    };

    return (
        <div 
        id="backdrop"
        onClick={handleOnBackDropClick}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 text-left"
        >
            <div className='bg-white w-1/3 max-md:w-2/3 px-[4%] py-[2%] rounded-2xl'>
                <div className='flex justify-between border-b'>
                  <span className='font-bold text-2xl mb-[6%]'>Connect Wallet</span>
                  <span className="cursor-pointer"><img src={'/images/x.png'} alt='X' id="backdrop" ></img></span>
                </div>
                <p className="mt-[7%] mb-[4%]">Choose your preferred wallet:</p>
                <img src={'/images/wallet-mask.png'} alt='wallet' className="mb-[4%]"></img>
                <img src={'/images/connect.png'} alt='connect'></img>
            </div> 
        </div>
    )
}

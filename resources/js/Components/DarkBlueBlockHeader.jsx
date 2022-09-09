import React from "react";

export default function DarkBlueBlockHeader({ className = "", children }) {
    return (
        <div className={`absolute top-0 left-0 right-0 flex flex-col flex-wrap justify-center
         sm:justify-center items-center px-20 py-20 psm:pt-0 bg-darkblue shadow-md `+ className}>
            {children}
        </div>
    );
}

import React from "react";

export default function DarkBlueBlockHeader({ className = "", children }) {
    return (
        <div className={`w-full h-full flex flex-col justify-center items-center px-20 py-20 sm:justify-center psm:pt-0 bg-darkblue shadow-md `+ className}>
            {children}
        </div>
    );
}

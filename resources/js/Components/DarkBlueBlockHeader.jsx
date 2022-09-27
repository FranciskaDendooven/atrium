import React from "react";

export default function DarkBlueBlockHeader({ className = "", children }) {
    return (
        <div className={`w-full h-fit flex flex-col justify-center items-center sm:justify-center psm:pt-0 bg-darkblue shadow-md `+ className}>
            {children}
        </div>
    );
}

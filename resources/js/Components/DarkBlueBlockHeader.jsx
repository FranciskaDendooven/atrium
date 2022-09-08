import React from "react";

export default function DarkBlueBlockHeader({ children }) {
    return (
        <div className="max-w-7xl flex flex-col flex-wrap sm:justify-center items-center px-6 py-4 pt-6 sm:pt-0 bg-darkblue shadow-md ">
            {children}
        </div>
    );
}

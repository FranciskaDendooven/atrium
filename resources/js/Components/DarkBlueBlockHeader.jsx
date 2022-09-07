import React from "react";

export default function DarkBlueBlockHeader() {
    return (
        <div className="w-full flex flex-row flex-wrap sm:justify-center items-center px-6 py-4 pt-6 sm:pt-0 bg-darkblue rounded-lg shadow-md">

                <img src=" {{ asset('images/atrium-icon-darkblue.png') }} " width="200px" alt="User Avatar picture" />

        </div>
    );
}

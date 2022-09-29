import React from "react";

export default function PostCard({ children }) {
    return (
        <div id="postCard" className="w-[850px] h-[450px] m-5 justify-center p-2 pl-8 bg-white rounded-xl border-2 border-darkblue shadow-md ">
            <div id="" className="pt-3 text-gray-600 dark:text-gray-400 text-sm overflow-y-auto">
                {children}
            </div>

        </div>
    );
}

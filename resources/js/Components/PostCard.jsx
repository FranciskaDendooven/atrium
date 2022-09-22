import React from "react";
import Button from "@/Components/Button";

export default function PostCard({children}) {
    return (
    
            <div className="flex flex-col justify-center p-4 m-5 max-w-4xl min-w-full bg-white rounded-xl border-2 border-darkblue shadow-md sm:items-center sm:justify-between">
                <div className="m-4 mt-8 text-gray-600 dark:text-gray-400 text-sm">
                    {children}
                </div>
     
            </div>
        
    );
}

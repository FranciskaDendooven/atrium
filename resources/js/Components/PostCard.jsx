import React from "react";
import Button from "@/Components/Button";

export default function PostCard({children}) {
    return (
    
            <div className="flex flex-row justify-center p-4 m-5 max-w-4xl min-w-full bg-white rounded-xl border-4 border-darkblue shadow-md sm:items-center sm:flex-col sm:justify-between">
                <div className="m-2 text-gray-600 dark:text-gray-400 text-sm">
                    {children}
                </div>
                <Button className="m-2 ml-4">Edit</Button>
                <Button className="m-2 ml-4">Delete</Button>
            </div>
        
    );
}

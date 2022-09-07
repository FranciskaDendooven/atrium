import React from "react";
import Button from "@/Components/Button";

export default function PostCard({ children }) {
    return (
        <div>
            <div class="flex justify-center p-4 m-5 max-w-4xl bg-white rounded shadow-md sm:items-center sm:justify-between">
         
                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                    {children}
                </div>
                <Button className="ml-4">Edit</Button>
                <Button className="ml-4">Delete</Button>
            </div>
        </div>
    );
}

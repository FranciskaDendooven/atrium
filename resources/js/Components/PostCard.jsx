import React from "react";
import Button from "@/Components/Button";

export default function PostCard({children}) {
    return (
    <>
            <div className="flex flex-row justify-center p-4 m-5 max-w-4xl min-w-full bg-white rounded-xl border-2 border-darkblue shadow-md sm:items-center sm:justify-between">
                <div className="m-4 mt-8 text-gray-600 dark:text-gray-400 text-sm">
                    {children}
                </div>
            </div>
        
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
  <div className="px-4 py-5 sm:px-6">
    <h3 class="text-lg font-medium leading-6 text-gray-900">Applicant Information</h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
    {children}
  </div>
  
</div>
</>
    );
}

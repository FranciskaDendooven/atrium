import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import Footer from "@/Layouts/Footer";

export default function Guest({ children }) {
    return (
        <>
       
        <div className="min-h-min flex flex-col flex-grow sm:justify-center items-center pt-6 pb-0 sm:pt-0 bg-gray-100">
            <div className='p-10 m-14 w-6/12 flex flex-col justify-center items-center rounded-xl border-2 border-darkblue bg-white'>
                 <div>
                <Link href="/">
                    <ApplicationLogo className="w-200 h-200 fill-current text-gray-500" />
                </Link>
            </div>

        <h2>Log in to Atrium</h2>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div></div>
           

        </div> 
            <div className="h-64">
                <Footer></Footer>
            </div>
        </>
    );
}

import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import CentralLogo from "@/Components/CentralLogo";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import PostCard from "@/Components/PostCard";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Components/SearchBar";


export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex flex-grow justify-center bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="static top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-sm text-gray-700 dark:text-gray-500 underline"
                        >
                            HOME
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>

            <DarkBlueBlockHeader>
                <div className="flex flex-row justify-center items-center">
                    <section className="justify-center items-center">
                        <h1 className="font-bold text-gray-100 text-5xl m-4 p-2">
                            In Becodians we trust!
                        </h1>
                        <h1 className="text-gray-400 font-bold text-3xl m-4 p-2">
                            This is a subtitle
                        </h1>
                        <section className="ml-0 m-10">
                            <Link
                                href={route("login")}
                                className="py-4 px-6 m-4 rounded-full font-bold  text-white text-xl bg-redOrange"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route("register")}
                                className="py-4 px-6 m-4 rounded-full font-bold  text-white text-xl bg-redOrange"
                            >
                                Register
                            </Link>
                        </section>
                    </section>
                    <ApplicationLogo className="w-6/12" />
                </div>
            </DarkBlueBlockHeader>
            <div className="flex flex-col items-center sm:items-center sm:pt-10">
                <section className="absolute right-0 mr-32">
                        <SearchBar />
                </section>                        
                <section className="items-center justify-center font-bold">    
                            <h1 className="text-3xl">This is a centered Title...Yes or No!?</h1>
                </section>
                </div>

            <div className="flex flex-col items-center min-h-screen sm:items-center sm:pt-10"></div>
            <div className="h-64">
                <Footer></Footer>
            </div>
        </>
    );
}

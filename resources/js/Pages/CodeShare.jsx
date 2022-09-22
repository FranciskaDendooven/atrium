import React from "react";
import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/inertia-react";
import CentralLogo from "@/Components/CentralLogo";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import PostCard from "@/Components/PostCard";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Components/SearchBar";

export default function CodeShare(props) {
    return (
        <>
            <Navbar auth={props.auth} errors={props.errors}></Navbar>
            <Head title="Code Share" />
            <div className="relative w-full h-96 flex flex-col overflow-auto items-center">
                <DarkBlueBlockHeader className="">
                    <section className="flex-row">
                        <h1 className="font-bold text-gray-100 text-5xl m-4 p-2"></h1>
                    </section>
                    <CentralLogo
                        src="images/icon/atriumIcons-12.png"
                        width="200px"
                        alt="avatar image for tech news, a profile smile face with lab jar for a speech bubble"
                    />

                    <h1 className="text-gray-400 text-2xl m-4 p-2">
                        This is a subtitle
                    </h1>
                </DarkBlueBlockHeader>
            </div>
            <div className="flex flex-col items-center sm:items-center sm:pt-10">
                <section className="absolute right-0 mr-32">
                    <SearchBar />
                </section>
                <section className="items-center justify-center font-bold">
                    <h1 className="text-3xl">
                        This is a centered Title...Yes or No!?
                    </h1>
                </section>
            </div>

            <div className="py-12">test Code Share!</div>

            <div className="h-64">
                <Footer></Footer>
            </div>
        </>
    );
}

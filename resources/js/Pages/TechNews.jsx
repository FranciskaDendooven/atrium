import React, { Component } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import CentralLogo from "@/Components/CentralLogo";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import PostCard from "@/Components/PostCard";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Components/SearchBar";

export default function TechNews(props) {
    return (
        <>
            <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Tech News
                    </h2>
                }
            >
                <Head title="Tech News" />

                <div className="relative w-full h-96 flex flex-col overflow-auto items-center">
                    <DarkBlueBlockHeader className="">
                        <section className="flex-row">
                            <h1 className="font-bold text-gray-100 text-5xl m-4 p-2"></h1>
                        </section>
                        <CentralLogo
                            src="images/icon/atriumIcons-10.png"
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


                    <div className="py-12">test tech news!</div>


                </div>
            </Authenticated>
            <div className="h-64">
                <Footer></Footer>
            </div>
        </>
    );
}

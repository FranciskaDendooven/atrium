import React, { useState } from "react";
import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/inertia-react";
import CentralLogo from "@/Components/CentralLogo";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import Footer from "@/Layouts/Footer";

export default function UserSettings(props) {
    return (
        <>
            <Navbar auth={props.auth} errors={props.errors}></Navbar>
         
                <Head title="User Settings" />

                <div className="relative w-full h-96 flex flex-col overflow-auto items-center">
                    <DarkBlueBlockHeader className="">
                        <section className="flex-row">
                            <h1 className="font-bold text-gray-100 text-5xl m-4 p-2">
                                Hello {props.auth.user.name}
                            </h1>
                        </section>
                        <CentralLogo src="images/icon/waldo.png" width="100px" alt="user avatar image" />

                        <h1 className="text-gray-400 text-2xl m-4 p-2">
                            This is a subtitle
                        </h1>
                    </DarkBlueBlockHeader>
                </div>

                <div className="flex flex-col items-center sm:items-center sm:pt-10">
                    <div className="py-12">test User Settings!</div>
                    <h1>
                        here goes some text with this user name:{" "}
                        {props.auth.user.name} and this user email:{" "}
                        {props.auth.user.email}
                    </h1>
                </div>
          

            <div className="h-64">
                <Footer></Footer>
            </div>
        </>
    );
}

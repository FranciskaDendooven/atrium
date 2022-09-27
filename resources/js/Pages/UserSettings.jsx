import React, { useState } from "react";
import Navbar from "@/Layouts/Navbar";
import { Head, useForm, usePage, Link } from "@inertiajs/inertia-react";
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
                    <CentralLogo
                        src="images/icon/waldo.png"
                        width="100px"
                        alt="user avatar image"
                    />

                    <h1 className="text-gray-400 text-2xl m-4 p-2">
                        This is a subtitle
                    </h1>
                </DarkBlueBlockHeader>
            </div>

            <div className="flex flex-col items-center sm:items-center sm:pt-10">
                <section className="flex flex-col items-justify-center mx-5 my-5 p-5 w-96 rounded-xl border-2 border-darkblue shadow-md">
                    <h1>Account Settings</h1>
                    <h3>Name: {props.auth.user.name}</h3>
                    <h3>Email: {props.auth.user.email}</h3>
                    <h3>User Name: {props.auth.user.username}</h3>
                    <h3>Password: # </h3>
                </section>

                <section className="flex flex-col w-96 mb-20">
                    <div className="mt-4">
                        <Link
                            tabIndex="1"
                            className="py-2 px-4 m-4 rounded text-white text-xl bg-lightBlue"
                            href={route("showEditUserSettings", props.auth.user.id)}
                        >
                            Edit
                        </Link>
                    </div>
                </section>
            </div>

            <div className="h-64">
                <Footer></Footer>
            </div>
        </>
    );
}

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

            <div className="relative w-full h-fit flex flex-col overflow-auto items-center">
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

                    <h1 className="text-center text-gray-400 text-2xl m-4 p-2">
                        Edit your account settings here!
                        <br/>Changing your password every now and then is good practice.
                    </h1>
                </DarkBlueBlockHeader>
            </div>

            <div className="flex flex-col place-items-center mt-4 mb-14">
                <section id="userSettingsForm" className="w-[300px] h-[450px] bg-white overflow-hidden shadow-sm rounded-xl border-2 border-darkblue sm:rounded-lg text-center">
                    <h1 className="m-5">Account Settings</h1>
                    <section>
                    <h3>Name: {props.auth.user.name}</h3>
                    <h3>Email: {props.auth.user.email}</h3>
                    <h3>User Name: {props.auth.user.username}</h3>
                    </section>
                    
                    <section className="mt-4">
                        <Link
                            tabIndex="1"
                            className="py-2 px-3 ml-2 rounded-full text-white text-l bg-lightBlue focus:outline-none"
                            href={route("showEditUserSettings", props.auth.user.id)}
                        >
                            Edit Settings
                        </Link>
                    </section>  
                    <hr className="border-darkblue m-10"/>

                    <h3>Password:</h3>
                    <br/>
                    <Link
                            tabIndex="1"
                            className="py-2 px-3 ml-2 rounded-full text-white text-l bg-lightBlue focus:outline-none"
                            href={route("changePassword")}
                           
                        >
                            Change Password
                            
                    </Link>
                   
                </section>

            </div>

            <div className="h-64">
                <Footer></Footer>
            </div>
        </>
    );
}

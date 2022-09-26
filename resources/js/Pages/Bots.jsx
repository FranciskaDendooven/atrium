import React from "react";
import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/inertia-react";
import CentralLogo from "@/Components/CentralLogo";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import Footer from "@/Layouts/Footer";
import Form from "@/Components/Form";

export default function Bots(props) {
    return (
        <>
            <Navbar auth={props.auth} errors={props.errors}></Navbar>

            <Head title="Bots" />

            <div className="relative w-full  flex flex-col overflow-auto items-center">
                <DarkBlueBlockHeader className="">
                    <section className="flex-row">
                        <h1 className="font-bold text-gray-100 text-5xl m-4 p-2">
                            Bots
                        </h1>
                    </section>
                    <CentralLogo
                        src="images/icon/atriumIcons-10.png"
                        width="200px"
                        alt="avatar image for tech news, a profile smile face with lab jar for a speech bubble"
                    />

                    <h1 className="text-gray-400 text-2xl m-4 p-2">
                        At the bots page <br />
                        Becodians can enter suggestions <br />
                        for our Dicord server bots. <br />
                    </h1>
                </DarkBlueBlockHeader>
            </div>
            <div className="flex flex-col items-center sm:items-center sm:pt-10">
                <section className="items-center justify-center font-bold">
                    <h1 className="text-3xl">This is the Bots page 🤖</h1>
                </section>

                <div className="py-12">test Bots! --- UNDER CONSTRUCTION</div>
                <Form></Form>
            </div>
            <div className="flex flex-col items-center min-h-screen sm:items-center sm:pt-10"></div>

            <div className="h-64">
                <Footer></Footer>
            </div>
        </>
    );
}

import React from "react";
import { Link } from "@inertiajs/inertia-react";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Footer() {
    return (
        <div className="relative">
            <DarkBlueBlockHeader>
                <div className=" w-full flex flex-row justify-center items-center">
                    <Link href="/">
                        <ApplicationLogo />
                    </Link>
                    <h3 className="font-bold text-redOrange text-xl">
                        {" "}
                        {new Date().getFullYear()} - Atrium{" "}
                    </h3>
                </div>
            </DarkBlueBlockHeader>
        </div>
    );
}

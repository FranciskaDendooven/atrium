import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function UserSettings(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    User Settings
                </h2>
            }
        >
            <Head title="User Settings" />

            <div className="relative flex flex-col items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <div className="py-12">test User Settings!</div>
                <h1>
                    here goes some text with this user name:{" "}
                    {props.auth.user.name}{" "}
                    and this user email:{" "}
                    {props.auth.user.email}
                </h1>
            </div>
        </Authenticated>
    );
}

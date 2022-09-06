import React from "react";
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

            <div className="py-12">test User Settings!</div>
        </Authenticated>
    );
}

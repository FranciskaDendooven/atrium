import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function CodeShare(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Code Share
                </h2>
            }
        >
            <Head title="Code Share" />

            <div className="py-12">test Code Share!</div>
        </Authenticated>
    );
}

import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function TechNews(props) {
    return (
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

            <div className="py-12">test tech news!</div>
        </Authenticated>
    );
}

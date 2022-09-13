import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm, Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    const {data, setData, errors, post} = useForm({
        title:"",
        content:"",
        tag:"",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('submitNewPost'));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Post</h2>}
        >
            <Head title="Posts" />

            <div className="py-12">
                WORK G DAMNIT
            </div>

        </Authenticated>
    );
}
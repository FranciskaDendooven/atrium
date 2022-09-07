import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm, usePage, Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    const {post} = usePage().props;

    const {data, setData, put, errors} = useForm({
        title: post.title || "",
        slug: post.slug || "",
        url: post.url || "",
        content: post.content || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('posts.update', post.id));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Post</h2>}
        >
            <Head title="Posts" />



        </Authenticated>
    );
}
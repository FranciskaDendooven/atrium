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

            <div className="py-12 min-w-full">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-xl border-2 border-darkblue sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link 
                                    className="py-2 px-4 m-4 rounded text-white text-xl bg-redOrange focus:outline-none"
                                    href={route("showPosts")}
                                >
                                    Back
                                </Link>
                            </div>

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Title</label>
                                        <input 
                                            type="text"
                                            className="w-full px-4 py-2 rounded"
                                            label="Title"
                                            name="title"
                                            value={data.title}
                                            onChange={(e)=>
                                            setData("title", e.target.value)}
                                         />

                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>

                                    <div className="flex flex-col mt-4">
                                    <div className="mb-0">
                                        <label className="">Content</label>
                                        <input 
                                            type="text"
                                            className="w-full px-4 py-2 rounded"
                                            label="content"
                                            name="content"
                                            value={data.content}
                                            onChange={(e)=>
                                            setData("content", e.target.value)}
                                         />

                                        <span className="text-red-600">
                                            {errors.content}
                                        </span>
                                    </div>
                                    </div>

                                    <div className="flex flex-col mt-4">
                                    <div className="mb-0">
                                        <label className="">Tag</label>
                                        <input 
                                            type="text"
                                            className="w-full px-4 py-2 rounded"
                                            label="tag"
                                            name="tag"
                                            value={data.tag}
                                            onChange={(e)=>
                                            setData("tag", e.target.value)}
                                         />

                                        <span className="text-red-600">
                                            {errors.tag}
                                        </span>
                                    </div>
                                    </div>
                                    
                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className="py-2 px-4 m-4 rounded text-white text-xl bg-lightBlue focus:outline-none"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </Authenticated>
    );
}
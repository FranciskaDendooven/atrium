import React from "react";
import Navbar from "@/Layouts/Navbar";
import { Head, useForm, usePage, Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    const {post} = usePage().props;
    console.log(props.post);

    const {data, setData, put, errors} = useForm({
        title: post.title || "",
        tag: post.tag || "",
        content: post.content || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('submitUpdatedPost', post.id));
    };

    return (
        <>
       <Navbar auth={props.auth}errors={props.errors}></Navbar>
        <Head title="Posts" />

            <div className="grid justify-center py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div id="editForm" className="w-[700px] bg-white overflow-hidden shadow-sm rounded-xl border-2 border-darkblue sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="py-2 px-3 ml-2 rounded-full text-white text-l bg-redOrange focus:outline-none"
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
                                            className="w-full px-4 py-2 rounded-md"
                                            label="Title"
                                            name="title"
                                            value={data.title}
                                            onChange={(e) =>
                                            setData("title", e.target.value)
                                            }
                                            />
                                            <span className="text-red-600">
                                                {errors.title}
                                            </span>
                                    </div>
                                    
                                    <div className="flex flex-col mt-4">
                                    <div className="mb-0">
                                        <label className="">Content</label>
                                        <textarea
                                            type="text"
                                            className="w-full px-4 py-2 rounded-md"
                                            label="content"
                                            name="content"
                                            row="15"
                                            errors={errors.content}
                                            value={data.content}
                                            onChange={(e) =>
                                                setData("content", e.target.value)
                                            }
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
                                            className="w-full px-4 py-2 rounded-md"
                                            label="tag"
                                            name="tag"
                                            errors={errors.tag}
                                            value={data.tag}
                                            onChange={(e) =>
                                                setData("tag", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.tag}
                                        </span>
                                    </div>
                                </div>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="py-2 px-3 ml-2 rounded-full text-white text-l bg-lightBlue focus:outline-none"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
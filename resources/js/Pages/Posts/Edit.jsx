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

            <div className="py-12 min-w-full">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-xl border-2 border-darkblue sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-redOrange rounded-full focus:outline-none"
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
                                            className="w-full px-4 py-2"
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
                                    
                                    <div className="mb-0 mt-4">
                                        <label className="">Content</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="content"
                                            name="content"
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

                                    <div className="mb-0 mt-4">
                                        <label className="">Tag</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
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

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-lightBlue rounded"
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
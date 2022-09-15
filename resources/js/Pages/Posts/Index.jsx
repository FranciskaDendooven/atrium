import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import PostCommentCard from "@/Components/PostCommentCard";
import CentralLogo from "@/Components/CentralLogo";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import PostCard from "@/Components/PostCard";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Components/SearchBar";


export default function Posts(props) {
    const [display, setDisplay] = useState("hidden");
    const [postId, setPostId] = useState(0);

    useEffect(() => {
        console.log("state is " + display);
    }, [display, postId]);

    const { posts } = usePage().props;

    const deleteMsg = (e, id) => {
        e.preventDefault();
        setDisplay("block");
        setPostId(id);
    };

    return (
        <>
            <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Posts
                    </h2>
                }
            >
                <div
                    id="deleteMsg"
                    className={
                        display +
                        " bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z=40"
                    }
                >
                    <div className="bg-white px-16 py-14 rounded-md text-center">
                        <h1 className="text-xl mb-4 font-bold text-slate-500">
                            Do you Want Delete
                        </h1>
                        <button
                            className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
                            onClick={() => {
                                setDisplay("hidden");
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                            // onClick={route("posts.destroy", "postId")}>
                        >
                            <Link
                                href={route("deleteAction", postId)}
                                method="post"
                                onClick={() => {
                                    setDisplay("hidden");
                                }}
                            >
                                Delete Post
                            </Link>
                            Ok
                        </button>
                    </div>
                </div>

                <Head title="Posts" />
                <div className="relative w-full h-96 flex flex-col overflow-auto items-center">
                    <DarkBlueBlockHeader className="">
                        <section className="flex-row">
                            <h1 className="font-bold text-gray-100 text-5xl m-4 p-2"></h1>
                        </section>
                        <CentralLogo
                            src="images/icon/atriumIcons-19.png"
                            width="200px"
                            alt="avatar image for tech news, a profile smile face with lab jar for a speech bubble"
                        />

                        <h1 className="text-gray-400 text-3xl m-4 p-2">
                            This is a subtitle
                        </h1>
                    </DarkBlueBlockHeader>
                </div>
                <div className="flex flex-col items-center sm:items-center sm:pt-10">
                <section className="absolute right-0 mr-32">
                        <SearchBar />
                </section>                        
                <section className="items-center justify-center font-bold">    
                            <h1 className="text-3xl">This is a centered Title...Yes or No!?</h1>
                </section>
                <div className="py-12 m-8">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <div className="flex items-center justify-between mb-6">
                                    <Link
                                        className="py-2 px-4 m-4 rounded-full text-white text-xl bg-lightBlue focus:outline-none"
                                        href={route("showCreatePost")}
                                    >
                                        Create Post
                                    </Link>
                                </div>

                                <table className="table-fixed w-full">
                                    <thead>
                                        <tr className="bg-darkblue text-white text-xl">
                                            {/* <th className="px-4 py-2 w-20">No.</th> */}
                                            <th className="px-4 py-2">Title</th>
                                            <th className="px-4 py-2">Body</th>
                                            <th className="px-4 py-2">Tag</th>
                                            <th className="px-4 py-2">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {posts.map(
                                            ({ id, title, content, tag }) => (
                                                <tr key={id}>
                                                    {/* <td className="border px-4 py-2">{ id }</td> */}
                                                    <td className="border px-4 py-2">
                                                        {title}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {content}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {tag}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        <Link
                                                            tabIndex="1"
                                                            className="py-2 px-4 m-4 rounded text-white text-xl bg-lightBlue"
                                                            href={route(
                                                                "showUpdatedPost",
                                                                id
                                                            )}
                                                        >
                                                            Edit
                                                        </Link>

                                                    <Link
                                                        tabIndex="1"
                                                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                        href={route("showUpdatedPost", id)}
                                                    >
                                                        Edit
                                                    </Link>

                                                    <button
                                                        onClick={(e) => deleteMsg(e, id)}
                                                        type="button"
                                                        className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                                <td>
                                                <PostCommentCard/>
                                                </td>
                                            </tr>
                                        ))}
                                                        <button
                                                            onClick={(e) =>
                                                                deleteMsg(e, id)
                                                            }
                                                            type="button"
                                                            className="py-2 px-4 m-4 rounded text-white text-xl bg-redOrange"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        )}



                                        {posts.length === 0 && (
                                            <tr>
                                                <td
                                                    className="px-6 py-4 border-t"
                                                    colSpan={4}
                                                >
                                                    Be the first to post!
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Authenticated>

            <div className="h-64">
                <Footer></Footer>
            </div>
        </>
    );
}

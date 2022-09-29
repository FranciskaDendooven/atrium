import React, { useEffect, useState } from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import PostCard from "@/Components/PostCard";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Components/SearchBar";
import Navbar from "@/Layouts/Navbar";


export default function Welcome(props) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [display, setDisplay] = useState("hidden");
    const [postId, setPostId] = useState(0);
    useEffect(() => {}, [display, postId]);

    //const { posts } = usePage().props;
    const [posts, setposts] = useState(props.posts);

    const deleteMsg = (e, id) => {
        e.preventDefault();
        setDisplay("block");
        setPostId(id);};

     

    return (
        <>
            <Navbar auth={props.auth} errors={props.errors}></Navbar>

            <Head title="Welcome" />
            <DarkBlueBlockHeader>
                <div className="flex flex-row justify-center items-center">
                    <section className="justify-center items-center">
                        <h1 className="font-bold text-gray-100 text-5xl m-4 p-2">
                            In Becodians we trust!
                        </h1>
                        <h1 className="text-gray-400 font-bold text-3xl m-4 p-2">
                            This is a subtitle
                        </h1>
                        <section className="ml-0 m-10">
                            <Link
                                href={route("login")}
                                className="py-4 px-6 m-4 rounded-full font-bold  text-white text-xl bg-redOrange"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route("register")}
                                className="py-4 px-6 m-4 rounded-full font-bold  text-white text-xl bg-redOrange"
                            >
                                Register
                            </Link>
                        </section>
                    </section>
                    <ApplicationLogo className="w-4/12" />
                </div>
            </DarkBlueBlockHeader>

            <div className="flex flex-col items-center sm:items-center sm:pt-10">
                <section className="absolute right-0 mr-32">
                    <SearchBar />
                </section>
                <section className="items-center justify-center font-bold">
                    <h1 className="text-3xl">Whats' new?</h1>
                </section>

                <div className="py-12 m-8">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="flex flex-col justify-center items-center sm:items-center sm:pt-10">
                                <section className="mb-6">
                                    <h1 className="font-bold text-2xl">
                                        Code Q&A
                                    </h1>

                                    {posts.map(
                                            ({
                                                title,
                                                content,
                                                page,
                                                tag,
                                                id,
                                                user,
                                            }) => {
                                                if (page === "CodeQA") {
                                                    return (
                                                        <PostCard key={id}>
                                                            <h1 className="m-4 mb-8 font-bold text-gray-700">
                                                                {title}
                                                            </h1>
                                                            <p>{user.name}</p>
                                                            <p className="text-ellipsis overflow-hidden">
                                                                {content}
                                                            </p>
                                                            <p>{tag}</p>
                                                            <p>{page}</p>

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

                                                            <button
                                                                onClick={(e) =>
                                                                    deleteMsg(
                                                                        e,
                                                                        id
                                                                    )
                                                                }
                                                                type="submit"
                                                                className="py-2 px-4 m-4 rounded text-white text-xl bg-redOrange"
                                                            >
                                                                Delete
                                                            </button>
                                                        </PostCard>
                                                    );
                                                }
                                            }
                                        )}

                                </section>

                                <section className="mb-6">
                                    <h1 className="font-bold text-2xl">
                                        Code Share
                                    </h1>

                                    {posts.map(
                                            ({
                                                title,
                                                content,
                                                page,
                                                tag,
                                                id,
                                                user,
                                            }) => {
                                                if (page === "Code Share") {
                                                    return (
                                                        <PostCard
                                                            className=""
                                                            key={id}
                                                        >
                                                            <h1 className="m-4 mb-8 font-bold text-gray-700">
                                                                {title}
                                                            </h1>
                                                            <p>{user.name}</p>
                                                            <p className="text-ellipsis overflow-hidden">
                                                                {content}
                                                            </p>
                                                            <p>{tag}</p>
                                                            <p>{page}</p>

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

                                                            <button
                                                                onClick={(e) =>
                                                                    deleteMsg(
                                                                        e,
                                                                        id
                                                                    )
                                                                }
                                                                type="submit"
                                                                className="py-2 px-4 m-4 rounded text-white text-xl bg-redOrange"
                                                            >
                                                                Delete
                                                            </button>
                                                        </PostCard>
                                                    );
                                                }
                                            }
                                        )}
                                </section>

                                <section className="mb-6">
                                    <h1 className="font-bold text-2xl">PIF</h1>

                                    {posts.map(
                                            ({
                                                title,
                                                content,
                                                page,
                                                tag,
                                                id,
                                                user,
                                            }) => {
                                                if (page === "PIF") {
                                                    return (
                                                        <PostCard
                                                            className=""
                                                            key={id}
                                                        >
                                                            <h1 className="m-4 mb-8 font-bold text-gray-700">
                                                                {title}
                                                            </h1>
                                                            <p>{user.name}</p>
                                                            <p className="text-ellipsis overflow-hidden">
                                                                {content}
                                                            </p>
                                                            <p>{tag}</p>
                                                            <p>{page}</p>

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

                                                            <button
                                                                onClick={(e) =>
                                                                    deleteMsg(
                                                                        e,
                                                                        id
                                                                    )
                                                                }
                                                                type="submit"
                                                                className="py-2 px-4 m-4 rounded text-white text-xl bg-redOrange"
                                                            >
                                                                Delete
                                                            </button>
                                                        </PostCard>
                                                    );
                                                }
                                            }
                                        )}
                                </section>
                                <section className=" mb-6">
                                    <h1 className="font-bold text-2xl">
                                        Brain Farts
                                    </h1>

                                    {posts.map(
                                            ({
                                                title,
                                                content,
                                                page,
                                                tag,
                                                id,
                                                user,
                                            }) => {
                                                if (page === "BrainFarts") {
                                                    return (
                                                        <PostCard key={id}>
                                                            <h1 className="m-4 mb-8 font-bold text-gray-700">
                                                                {title}
                                                            </h1>
                                                            <p>{user.name}</p>
                                                            <p className="text-ellipsis overflow-hidden">
                                                                {content}
                                                            </p>
                                                            <p>{tag}</p>
                                                            <p>{page}</p>

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

                                                            <button
                                                                onClick={(e) =>
                                                                    deleteMsg(
                                                                        e,
                                                                        id
                                                                    )
                                                                }
                                                                type="submit"
                                                                className="py-2 px-4 m-4 rounded text-white text-xl bg-redOrange"
                                                            >
                                                                Delete
                                                            </button>
                                                        </PostCard>
                                                    );
                                                }
                                            }
                                        )}
                                </section>
                                <section className="mb-6">
                                    <h1 className="font-bold text-2xl">
                                        Tech News
                                    </h1>

                                    {posts.map(
                                            ({
                                                title,
                                                content,
                                                page,
                                                tag,
                                                id,
                                                user,
                                            }) => {
                                                if (page === "TechNews") {
                                                    return (
                                                        <PostCard
                                                            className=""
                                                            key={id}
                                                        >
                                                            <h1 className="m-4 mb-8 font-bold text-gray-700">
                                                                {title}
                                                            </h1>
                                                            <p>{user.name}</p>
                                                            <p className="text-ellipsis overflow-hidden">
                                                                {content}
                                                            </p>
                                                            <p>{tag}</p>
                                                            <p>{page}</p>

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

                                                            <button
                                                                onClick={(e) =>
                                                                    deleteMsg(
                                                                        e,
                                                                        id
                                                                    )
                                                                }
                                                                type="submit"
                                                                className="py-2 px-4 m-4 rounded text-white text-xl bg-redOrange"
                                                            >
                                                                Delete
                                                            </button>
                                                        </PostCard>
                                                    );
                                                }
                                            }
                                        )}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-64">
                <Footer></Footer>
            </div>
        </>
    );
}

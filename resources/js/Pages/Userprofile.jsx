import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import CentralLogo from "@/Components/CentralLogo";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import PostCard from "@/Components/PostCard";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Components/SearchBar";
import Pagination from "@/Components/Pagination";


export default function Profile(props) {

    const [display, setDisplay] = useState("hidden");
    const [postId, setPostId] = useState(0);

    useEffect(() => {
        
    }, [display, postId]);

    const posts = props.posts;

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
                        {props.auth.user.name} Profile
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
                            //onClick={route("posts.destroy", "postId")}
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

                <Head title="Profile" />

                <div className="relative w-full h-96 flex flex-col overflow-auto items-center">
                    <DarkBlueBlockHeader className="">
                        <section className="flex-row">
                            <h1 className="font-bold text-gray-100 text-5xl m-4 p-2">
                                Hello {props.auth.user.name}
                            </h1>
                        </section>
                        <CentralLogo
                            width="100px"
                            src="images/icon/waldo.png"
                            alt="user avater image"
                        />

                        <h1 className="text-gray-400 text-2xl m-4 p-2">
                            This is a subtitle
                        </h1>
                    </DarkBlueBlockHeader>
                </div>

                <div className="flex flex-col items-center sm:items-center sm:pt-10">
                    <section className="absolute right-0 mr-32">
                        <SearchBar />
                    </section>
                    <h1 className="font-bold text-3xl">Your Posts</h1>

                    <section>
                        <h1 className="font-bold text-2xl">Code Q&A</h1>

                        {posts.map(({ title, content, page, tag, id }) => {
                            if (page === "CodeQA") {
                                return (
                                    <PostCard className="" key={id}>
                                        <h1 className="m-4 mb-8 font-bold text-gray-700">
                                            {title}
                                        </h1>
                                        <p>{content}</p>
                                        <p>{tag}</p>
                                        <p>{page}</p>

                                        <Link
                                            tabIndex="1"
                                            className="py-2 px-4 m-4 rounded text-white text-xl bg-lightBlue"
                                            href={route("showUpdatedPost", id)}
                                        >
                                            Edit
                                        </Link>

                                        <button
                                           onClick={(e) => deleteMsg(e, id)}
                                            type="submit"
                                            className="py-2 px-4 m-4 rounded text-white text-xl bg-redOrange"
                                        >
                                            Delete
                                        </button>
                                    </PostCard>
                                );
                            }
                        })}

                        {/* <Pagination class="mt-6" links={posts} /> */}
                    </section>

                    <section>
                        <h1 className=" font-bold text-2xl">Code Share</h1>

                        <PostCard className="">
                            <h1 className="m-4 mb-8 font-bold text-gray-700">
                                this is just a short...
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Animi assumenda rem dolore
                                placeat ut adipisci magni earum sit officiis
                                ipsa! Quidem ipsum quaerat dolor. Pariatur nulla
                                voluptatem dolor et obcaecati. testing short
                                post
                            </p>
                        </PostCard>
                    </section>

                    <section>
                        <h1 className="font-bold text-2xl">PIF</h1>

                        <PostCard className="">
                            <h1 className="m-4 mb-8 font-bold text-gray-700">
                                title this is a very long and extenuating title
                                that keeps on going and going and going and
                                going ... ad eternum
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Animi assumenda rem dolore
                                placeat ut adipisci magni earum sit officiis
                                ipsa! Quidem ipsum quaerat dolor. Pariatur nulla
                                voluptatem dolor et obcaecati.
                            </p>
                        </PostCard>
                    </section>
                </div>
            </Authenticated>
            <div className="h-64">
                <Footer></Footer>
            </div>
        </>
    );
}

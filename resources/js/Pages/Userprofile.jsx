import React, { useState, useEffect } from "react";
import Navbar from "@/Layouts/Navbar";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import CentralLogo from "@/Components/CentralLogo";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import PostCard from "@/Components/PostCard";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Components/SearchBar";
import ReactPaginate from "react-paginate";

export default function Profile(props) {
    const [display, setDisplay] = useState("hidden");
    const [postId, setPostId] = useState(0);

    useEffect(() => {}, [display, postId]);

    /// the useState atributed to the posts array is being used for the pagination functionality ////
    const [posts, setposts] = useState(props.posts);

    const deleteMsg = (e, id) => {
        e.preventDefault();
        setDisplay("block");
        setPostId(id);
    };

    //// pagination ////
    const [page, setPage] = useState(0);
    const postsPerPage = 3;
    const numberOfPostsVisited = page * postsPerPage;
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const changePage = ({ selected }) => {
        setPage(selected);
    };
    //// pagination ////

    return (
        <>
            <Navbar
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
                        " bg-slate-800 bg-opacity-50 flex justify-center items-center overflow-y-auto overflow-x-hidden absolute top-0 right-0 bottom-0 left-0 z=1"
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
                        <button className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">
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
            </Navbar>

            <Head title="Profile" />

            <div className="w-full h-96 flex flex-col overflow-auto items-center">
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

            <div className="flex flex-col max-w-full sm:pt-10">
                <section className="absolute right-0 mr-32">
                    <SearchBar />
                </section>
                <section className="flex justify-center items-center sm:items-center sm:pt-10">
                    <h1 className="font-bold text-3xl">Your Posts</h1>
                </section>

                <div className="flex flex-col justify-center items-center sm:items-center sm:pt-10">
                    <section className="mb-6">
                        <h1 className="font-bold text-2xl">Code Q&A</h1>

                        {posts
                            .slice(
                                numberOfPostsVisited,
                                numberOfPostsVisited + postsPerPage
                            )
                            .map(({ title, content, page, tag, id, user }) => {
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
                                                    deleteMsg(e, id)
                                                }
                                                type="submit"
                                                className="py-2 px-4 m-4 rounded text-white text-xl bg-redOrange"
                                            >
                                                Delete
                                            </button>
                                        </PostCard>
                                    );
                                }
                            })}
                        <section className="mx-4 my-4">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={totalPages}
                                onPageChange={changePage}
                                containerClassName={"navigationButtons"}
                                previousLinkClassName={"previousButton"}
                                nextLinkClassName={"nextButton"}
                                disabledClassName={"navigationDisabled"}
                                activeClassName={"navigationActive"}
                                pageRangeDisplayed={3}
                                renderOnZeroPageCount={null}
                            />
                        </section>
                    </section>

                    <section className="mb-6">
                        <h1 className="font-bold text-2xl">Code Share</h1>

                        {posts
                            .slice(
                                numberOfPostsVisited,
                                numberOfPostsVisited + postsPerPage
                            )
                            .map(({ title, content, page, tag, id, user }) => {
                                if (page === "Code Share") {
                                    return (
                                        <PostCard className="" key={id}>
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
                                                    deleteMsg(e, id)
                                                }
                                                type="submit"
                                                className="py-2 px-4 m-4 rounded text-white text-xl bg-redOrange"
                                            >
                                                Delete
                                            </button>
                                        </PostCard>
                                    );
                                }
                            })}

                        <section className="mx-4 my-4">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={totalPages}
                                onPageChange={changePage}
                                containerClassName={"navigationButtons"}
                                previousLinkClassName={"previousButton"}
                                nextLinkClassName={"nextButton"}
                                disabledClassName={"navigationDisabled"}
                                activeClassName={"navigationActive"}
                            />
                        </section>
                    </section>

                    <section className="mb-6">
                        <h1 className="font-bold text-2xl">PIF</h1>

                        {posts
                            .slice(
                                numberOfPostsVisited,
                                numberOfPostsVisited + postsPerPage
                            )
                            .map(({ title, content, page, tag, id, user }) => {
                                if (page === "PIF") {
                                    return (
                                        <PostCard className="" key={id}>
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
                                                    deleteMsg(e, id)
                                                }
                                                type="submit"
                                                className="py-2 px-4 m-4 rounded text-white text-xl bg-redOrange"
                                            >
                                                Delete
                                            </button>
                                        </PostCard>
                                    );
                                }
                            })}
                        <section className="mx-4 my-4">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={totalPages}
                                onPageChange={changePage}
                                containerClassName={"navigationButtons"}
                                previousLinkClassName={"previousButton"}
                                nextLinkClassName={"nextButton"}
                                disabledClassName={"navigationDisabled"}
                                activeClassName={"navigationActive"}
                            />
                        </section>
                    </section>
                    <section className=" mb-6">
                        <h1 className="font-bold text-2xl">Brain Farts</h1>

                        {posts
                            .slice(
                                numberOfPostsVisited,
                                numberOfPostsVisited + postsPerPage
                            )
                            .map(({ title, content, page, tag, id, user }) => {
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
                                                    deleteMsg(e, id)
                                                }
                                                type="submit"
                                                className="py-2 px-4 m-4 rounded text-white text-xl bg-redOrange"
                                            >
                                                Delete
                                            </button>
                                        </PostCard>
                                    );
                                }
                            })}
                        <section className="mx-4 my-4">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={totalPages}
                                onPageChange={changePage}
                                containerClassName={"navigationButtons"}
                                previousLinkClassName={"previousButton"}
                                nextLinkClassName={"nextButton"}
                                disabledClassName={"navigationDisabled"}
                                activeClassName={"navigationActive"}
                            />
                        </section>
                    </section>
                    <section className="mb-6">
                        <h1 className="font-bold text-2xl">Tech News</h1>

                        {posts
                            .slice(
                                numberOfPostsVisited,
                                numberOfPostsVisited + postsPerPage
                            )
                            .map(({ title, content, page, tag, id, user }) => {
                                if (page === "TechNews") {
                                    return (
                                        <PostCard className="" key={id}>
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
                                                    deleteMsg(e, id)
                                                }
                                                type="submit"
                                                className="py-2 px-4 m-4 rounded text-white text-xl bg-redOrange"
                                            >
                                                Delete
                                            </button>
                                        </PostCard>
                                    );
                                }
                            })}

                        <section className="mx-4 my-4">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={totalPages}
                                onPageChange={changePage}
                                containerClassName={"navigationButtons"}
                                previousLinkClassName={"previousButton"}
                                nextLinkClassName={"nextButton"}
                                disabledClassName={"navigationDisabled"}
                                activeClassName={"navigationActive"}
                            />
                        </section>
                    </section>
                </div>
            </div>

            <div className="h-64">
                <Footer></Footer>
            </div>
        </>
    );
}

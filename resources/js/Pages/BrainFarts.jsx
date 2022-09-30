import React, { useEffect, useState } from "react";
import Navbar from "@/Layouts/Navbar";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import PostCommentCard from "@/Components/PostCommentCard";
import PostCommentText from "@/Components/PostCommentText";
import PostCard from "@/Components/PostCard";
import CentralLogo from "@/Components/CentralLogo";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Components/SearchBar";
import ReactPaginate from "react-paginate";

export default function Posts(props) {
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
            <Navbar auth={props.auth} errors={props.errors}></Navbar>

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

            <Head title="BrainFarts" />

            <div className="relative w-full h-fit flex flex-col overflow-auto items-center">
                <DarkBlueBlockHeader className="">
                    <section className="flex-row">
                        <h1 className="font-bold text-gray-100 text-4xl m-4 p-2">
                            BrainFarts
                        </h1>
                    </section>
                    <CentralLogo
                        src="images/icon/atriumIcons-21.png"
                        width="200px"
                        alt="avatar image for brainfarts, a profile smile face"
                    />

                    <h1 className="text-gray-400 text-2xl m-4 p-2">
                        Testing <br />
                        this <br />
                        shit out <br />
                    </h1>
                </DarkBlueBlockHeader>
            </div>
            <div className="flex flex-col items-center sm:items-center sm:pt-10">
                <section className="absolute right-0 mr-32">
                    <SearchBar />
                </section>
                <section className="items-center justify-center font-bold">
                    <h1 className="text-3xl">
                        Welcome to the BrainFarts page 🧠💨
                    </h1>
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

                                <section className="mb-6">
                                    <h1 className="font-bold text-2xl">
                                        BrainFarts
                                    </h1>

                                    {posts
                                        .slice(
                                            numberOfPostsVisited,
                                            numberOfPostsVisited + postsPerPage
                                        )
                                        .map(
                                            ({
                                                id,
                                                user_id,
                                                title,
                                                content,
                                                tag,
                                                page,
                                                comments,
                                                user,
                                            }) => {
                                                let visible = false;

                                                if (
                                                    props.auth.user &&
                                                    user_id ==
                                                        props.auth.user.id
                                                ) {
                                                    visible = true;
                                                }
                                                if (page === "BrainFarts")
                                                    return (
                                                        <PostCard key={id}>
                                                            <h1 className="m-4 mb-8 font-bold text-gray-700">
                                                                {title}
                                                            </h1>
                                                            <p>
                                                                <b>
                                                                    by{" "}
                                                                    {user.name}
                                                                </b>
                                                            </p>
                                                            <p className="text-ellipsis overflow-hidden">
                                                                {content}
                                                            </p>
                                                            <p>{tag}</p>

                                                            <p>
                                                                <PostCommentText
                                                                    comments={
                                                                        comments
                                                                    }
                                                                />
                                                            </p>

                                                            {visible ? (
                                                                <>
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
                                                                        onClick={(
                                                                            e
                                                                        ) =>
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
                                                                </>
                                                            ) : (
                                                                " "
                                                            )}

                                                            <PostCommentCard
                                                                postId={id}
                                                            />
                                                        </PostCard>
                                                    );
                                            }
                                        )}
                                    <section className="mx-4 my-4">
                                        <ReactPaginate
                                            previousLabel={"Previous"}
                                            nextLabel={"Next"}
                                            pageCount={totalPages}
                                            onPageChange={changePage}
                                            containerClassName={
                                                "navigationButtons"
                                            }
                                            previousLinkClassName={
                                                "previousButton"
                                            }
                                            nextLinkClassName={"nextButton"}
                                            disabledClassName={
                                                "navigationDisabled"
                                            }
                                            activeClassName={"navigationActive"}
                                            pageRangeDisplayed={3}
                                            renderOnZeroPageCount={null}
                                        />
                                    </section>
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

import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import CentralLogo from "@/Components/CentralLogo";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import PostCard from "@/Components/PostCard";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Components/SearchBar";
import Navbar from "@/Layouts/Navbar";
import '/resources/CSS/app.css';


export default function Welcome(props) {
    const [posts] = useState(props.posts);

    return (
        <>
            <Navbar auth={props.auth} errors={props.errors}></Navbar>

            <Head title="Welcome" />
            <DarkBlueBlockHeader>
                <div className="flex flex-row h-[500px] justify-center items-center">
                    <section className="justify-center items-center">
                        <h1 className="font-bold text-gray-100 text-5xl m-4 p-2">
                        Welcome to Atrium!
                        </h1>
                        <h1 className="text-gray-400 font-bold text-3xl m-4 p-2">
                            <br/>Your home of trust and connection.
                            <br/>For in <u>BeCodians</u> we trust!
                            <br/><u>Connect</u> with your peers on a <u>global</u> level. 
                        </h1>
                        <p className="text-gray-400 font-bold text-m m-4 p-2"
                        >Join the BeCode <u>community</u>?
                        <br/>Click on the register button below
                        </p>
                        <section className="ml-0 m-10">
                            <Link
                                href={route("login")}
                                className="py-2 px-6 m-4 rounded-full font-bold  text-white text-xl bg-redOrange"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route("register")}
                                className="py-2 px-6 m-4 rounded-full font-bold  text-white text-xl bg-redOrange"
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
                    <h1 className="text-3xl">What's New?</h1>
                    <p className="text-m">Check it out down below</p>
                </section>

                <div className="m-8">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white shadow-sm sm:rounded-lg">
                            <div className="flex flex-col justify-center items-center sm:items-center sm:pt-10">
                                <section className="mb-6">
                             

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
                                                            <h1 className="text-gray-900 font-bold text-2xl">
                                                                Code Q&A
                                                            </h1>
                                                            <CentralLogo
                                                                src="images/icon/atriumIcons-19.png"
                                                                width="150px"
                                                                alt="avatar image for tech news, a profile smile face with lab jar for a speech bubble"
                                                            />

                                                            <h1 className="mt-1 font-bold text-gray-700">
                                                                {title}
                                                            </h1>

                                                            <p className="ml-2 mb-4 text-gray-700">
                                                                <b>
                                                                    by{" "}
                                                                    {user.name}
                                                                </b>
                                                            </p>

                                                            <div className="content">
                                                                <p className="flex flex-col ml-2 mb-5 w-[500px] text-ellipsis ">
                                                                    {content}
                                                                </p>
                                                            </div>

                                                            <p className="ml-2 mb-1 font-small text-gray-600">
                                                                <b className="text-lightBlue">
                                                                    tags: {tag}
                                                                </b>
                                                            </p>

                                                            <section className="m-4">
                                                                <Link
                                                                    href={route(
                                                                        "showQAPosts"
                                                                    )}
                                                                    className="py-2 px-6 m-4 rounded-full font-bold  text-white text-l bg-redOrange"
                                                                >
                                                                    Show all
                                                                    posts
                                                                </Link>
                                                            </section>
                                                        </PostCard>
                                                    );
                                                }
                                            }
                                        )}

                                </section>

                                <section className="mb-6">
                                
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
                                                            <h1 className="text-gray-900 font-bold text-2xl">
                                                                Code Share
                                                            </h1>
                                                            <CentralLogo
                                                                src="images/icon/atriumIcons-12.png"
                                                                width="150px"
                                                                alt="avatar image for tech news, a profile smile face with lab jar for a speech bubble"
                                                            />
                                                            <h1 className="mt-1 font-bold text-gray-700">
                                                                {title}
                                                            </h1>

                                                            <p className="ml-2 mb-4 text-gray-700">
                                                                <b>
                                                                    by{" "}
                                                                    {user.name}
                                                                </b>
                                                            </p>

                                                            <div className="content">
                                                                <p className="flex flex-col ml-2 mb-5 w-[500px] text-ellipsis ">
                                                                    {content}
                                                                </p>
                                                            </div>

                                                            <p className="ml-2 mb-1 font-small text-gray-600">
                                                                <b className="text-lightBlue">
                                                                    tags: {tag}
                                                                </b>
                                                            </p>

                                                            <section className="m-4">
                                                                <Link
                                                                    href={route(
                                                                        "showCodeSharePosts"
                                                                    )}
                                                                    className="py-2 px-6 m-4 rounded-full font-bold  text-white text-l bg-redOrange"
                                                                >
                                                                    Show all
                                                                    posts
                                                                </Link>
                                                            </section>
                                                        </PostCard>
                                                    );
                                                }
                                            }
                                        )}
                                </section>

                                <section className="mb-6">


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
                                                            <h1 className="text-gray-900 font-bold text-2xl">
                                                                PIF
                                                            </h1>
                                                            <CentralLogo
                                                                src="images/icon/atriumIcons-11.png"
                                                                width="150px"
                                                                alt="avatar image for tech news, a profile smile face with lab jar for a speech bubble"
                                                            />
                                                            <h1 className="mt-1 font-bold text-gray-700">
                                                                {title}
                                                            </h1>

                                                            <p className="ml-2 mb-4 text-gray-700">
                                                                <b>
                                                                    by{" "}
                                                                    {user.name}
                                                                </b>
                                                            </p>

                                                            <div className="content">
                                                                <p className="flex flex-col ml-2 mb-5 w-[500px] text-ellipsis ">
                                                                    {content}
                                                                </p>
                                                            </div>

                                                            <p className="ml-2 mb-1 font-small text-gray-600">
                                                                <b className="text-lightBlue">
                                                                    tags: {tag}
                                                                </b>
                                                            </p>

                                                            <section className="m-4">
                                                                <Link
                                                                    href={route(
                                                                        "showPifPosts"
                                                                    )}
                                                                    className="py-2 px-6 m-4 rounded-full font-bold  text-white text-l bg-redOrange"
                                                                >
                                                                    Show all
                                                                    posts
                                                                </Link>
                                                            </section>
                                                        </PostCard>
                                                    );
                                                }
                                            }
                                        )}
                                </section>
                                <section className=" mb-6">
                                   
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
                                                            <h1 className="text-gray-900 font-bold text-2xl">
                                                                BrainFarts
                                                            </h1>
                                                            <CentralLogo
                                                                src="images/icon/atriumIcons-21.png"
                                                                width="150px"
                                                                alt="avatar image for brainfarts, a profile smile face"
                                                            />
                                                            <h1 className="mt-1 font-bold text-gray-700">
                                                                {title}
                                                            </h1>

                                                            <p className="ml-2 mb-4 text-gray-700">
                                                                <b>
                                                                    by{" "}
                                                                    {user.name}
                                                                </b>
                                                            </p>

                                                            <div className="content">
                                                                <p className="flex flex-col ml-2 mb-5 w-[500px] text-ellipsis ">
                                                                    {content}
                                                                </p>
                                                            </div>

                                                            <p className="ml-2 mb-1 font-small text-gray-600">
                                                                <b className="text-lightBlue">
                                                                    tags: {tag}
                                                                </b>
                                                            </p>

                                                            <section className="m-4">
                                                                <Link
                                                                    href={route(
                                                                        "showBrainFartsPosts"
                                                                    )}
                                                                    className="py-2 px-6 m-4 rounded-full font-bold  text-white text-l bg-redOrange"
                                                                >
                                                                    Show all
                                                                    posts
                                                                </Link>
                                                            </section>
                                                        </PostCard>
                                                    );
                                                }
                                            }
                                        )}
                                </section>
                                <section className="mb-6">
                                
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
                                                            <h1 className="text-gray-900 font-bold text-2xl">
                                                               Technnews
                                                            </h1>
                                                            <CentralLogo
                                                                src="images/icon/atriumIcons-16.png"
                                                                width="150px"
                                                                alt="avatar image for tech news, a profile smile face with lab jar for a speech bubble"
                                                            />
                                                            <h1 className="mt-1 font-bold text-gray-700">
                                                                {title}
                                                            </h1>

                                                            <p className="ml-2 mb-4 text-gray-700">
                                                                <b>
                                                                    by{" "}
                                                                    {user.name}
                                                                </b>
                                                            </p>

                                                            <div className="content">
                                                                <p className="flex flex-col ml-2 mb-5 w-[500px] text-ellipsis ">
                                                                    {content}
                                                                </p>
                                                            </div>

                                                            <p className="ml-2 mb-1 font-small text-gray-600">
                                                                <b className="text-lightBlue">
                                                                    tags: {tag}
                                                                </b>
                                                            </p>

                                                            <section className="m-4">
                                                                <Link
                                                                    href={route(
                                                                        "showTechNewsPosts"
                                                                    )}
                                                                    className="py-2 px-6 m-4 rounded-full font-bold  text-white text-l bg-redOrange"
                                                                >
                                                                    Show all
                                                                    posts
                                                                </Link>
                                                            </section>
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

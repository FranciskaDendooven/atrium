import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import CentralLogo from "@/Components/CentralLogo";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import PostCard from "@/Components/PostCard";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Components/SearchBar";

export default function Profile(props, auth) {



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

                        {posts.map(({ id, title, content, tag }) => (
                            
                        <PostCard className="">
  
                                <h1 className="m-4 mb-8 font-bold text-gray-700">
                                {title}
                                </h1>
                                <p>
                                {content}
                                </p>

                        </PostCard> 
                        
                       ))}

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

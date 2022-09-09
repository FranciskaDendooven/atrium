import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import CentralLogo from "@/Components/CentralLogo";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import PostCard from "@/Components/PostCard";

export default function Profile(props, auth) {
    return (
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

            <div className="flex flex-col items-center sm:items-center sm:pt-0">
                <div>
                    <DarkBlueBlockHeader>
                        <section className="flex flex-row ">
                            <h1 className="font-bold text-gray-100 text-6xl m-4 p-2">
                                Hello {props.auth.user.name}
                            </h1>
                        </section>
                        <CentralLogo src="images/icon/waldo.png" />

                        <h1 className="text-gray-400 text-4xl m-4 p-2">
                            This is a subtitle
                        </h1>
                    </DarkBlueBlockHeader>
                </div>

                <div className="absolute inset-96 min-h-7xl flex flex-col items-center sm:items-center sm:pt-10">
                    <section>
                        <h3>Search bar</h3>
                    </section>
                    <h1 className="text-3xl">Your Posts</h1>

                    <section>
                        <h1 className="text-3xl">Code Q&A</h1>

                        <PostCard className="py-12 px-12">
                            <h1>title</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Animi assumenda rem dolore
                                placeat ut adipisci magni earum sit officiis
                                ipsa! Quidem ipsum quaerat dolor. Pariatur nulla
                                voluptatem dolor et obcaecati.
                            </p>
                        </PostCard>
                    </section>

                    <section>
                        <h1 className="text-3xl">Code Share</h1>

                        <PostCard className="py-12 px-12">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Animi assumenda rem dolore
                                placeat ut adipisci magni earum sit officiis
                                ipsa! Quidem ipsum quaerat dolor. Pariatur nulla
                                voluptatem dolor et obcaecati.
                            </p>
                        </PostCard>
                    </section>

                    <section>
                        <h1 className="text-3xl">PIF</h1>

                        <PostCard className="py-12 px-12">
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
            </div>
        </Authenticated>
    );
}

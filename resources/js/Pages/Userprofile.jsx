import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Title from "@/Components/Title";
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
                    Home
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="max-w-7xl mx-auto flex flex-col items-top justify-center sm:items-center sm:pt-0">
                <div>
                    <DarkBlueBlockHeader>
                        <section className="flex flex-row ">
                            <Title title="Hello"/>
                            <h1 className="font-bold text-gray-200 text-2xl ml-2">
                                {props.auth.user.name}
                            </h1>
                        </section>
                        <CentralLogo src="images/icon/waldo.png" />
                        <Title className="text-gray-600" title="this is a subtitle" />
                    </DarkBlueBlockHeader>
                </div>
                <section>
                    <h3>Search bar</h3>
                </section>
                <h1 className="text-3xl">Your Posts</h1>

                <section>
                    <h1 className="text-3xl">Code Q&A</h1>

                    <PostCard className="py-12 px-12">
                        <h1>title </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Animi assumenda rem dolore placeat ut adipisci
                            magni earum sit officiis ipsa! Quidem ipsum quaerat
                            dolor. Pariatur nulla voluptatem dolor et obcaecati.
                        </p>
                    </PostCard>
                </section>

                <section>
                    <h1 className="text-3xl">Code Share</h1>

                    <PostCard className="py-12 px-12">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Animi assumenda rem dolore placeat ut adipisci
                            magni earum sit officiis ipsa! Quidem ipsum quaerat
                            dolor. Pariatur nulla voluptatem dolor et obcaecati.
                        </p>
                    </PostCard>
                </section>

                <section>
                    <h1 className="text-3xl">PIF</h1>

                    <PostCard className="py-12 px-12">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Animi assumenda rem dolore placeat ut adipisci
                            magni earum sit officiis ipsa! Quidem ipsum quaerat
                            dolor. Pariatur nulla voluptatem dolor et obcaecati.
                        </p>
                    </PostCard>
                </section>

                {/* <section>
                @foreach ($posts as $post)
                <li>
                    <a class="text-3xl font-semibold m-3 p-3 text-amber-900 hover:bg-amber-900 hover:text-yellow-50" href="{route('post', $post.id)}">
                        {$post.title}
                    </a>
                    <a class="text-xl font-semibold m-1 p-3 text-amber-500 hover:bg-amber-600 hover:text-yellow-50" href="{{route('user', $post.user.id)}}">
                        by:{" ". $post.user.name}
                    </a>  
                </li>
                @endforeach
                </section> */}
            </div>
        </Authenticated>
    );
}

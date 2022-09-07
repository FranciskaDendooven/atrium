import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import PostCard from "@/Components/PostCard";
import { Head } from "@inertiajs/inertia-react";

export default function Profile( props ) {
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

            <div className="relative flex flex-col items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <div className="py-12 px-12">
                    <section>
                        <h1>hello </h1>

                        <h3>Search bar</h3>
                    </section>
                </div>  
                <h1 className="text-3xl">Your Posts</h1>         

                <section>
                <h1 className="text-3xl">Code Q&A</h1> 

                <PostCard className="py-12 px-12">

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda rem dolore placeat ut adipisci magni earum sit officiis ipsa! Quidem ipsum quaerat dolor. Pariatur nulla voluptatem dolor et obcaecati.</p>
                </PostCard>   
                </section>

                <section>
                    <h1 className="text-3xl">Code Share</h1>
             
                <PostCard className="py-12 px-12">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda rem dolore placeat ut adipisci magni earum sit officiis ipsa! Quidem ipsum quaerat dolor. Pariatur nulla voluptatem dolor et obcaecati.</p>
                </PostCard>   
                </section>

                <section>
                    <h1 className="text-3xl">PIF</h1>
             
                <PostCard className="py-12 px-12">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda rem dolore placeat ut adipisci magni earum sit officiis ipsa! Quidem ipsum quaerat dolor. Pariatur nulla voluptatem dolor et obcaecati.</p>
                </PostCard>   
                </section>
 

            </div>
        </Authenticated>
    );
}

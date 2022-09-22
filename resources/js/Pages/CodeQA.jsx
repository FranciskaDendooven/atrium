import React from 'react';
import Navbar from "@/Layouts/Navbar";
import { Head } from '@inertiajs/inertia-react';

export default function CodeQA(props) {
    return (
        <>
            <Navbar auth={props.auth} errors={props.errors}></Navbar>

            <Head title="Code Q&A" />

            <div className="py-12">test some! CodeQA</div>
        </>
    );
}

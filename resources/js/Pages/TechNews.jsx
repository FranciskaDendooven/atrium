import React, { Component } from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Navbar";
import CentralLogo from "@/Components/CentralLogo";
import DarkBlueBlockHeader from "@/Components/DarkBlueBlockHeader";
import PostCard from "@/Components/PostCard";
import Footer from "@/Layouts/Footer";
import SearchBar from "@/Components/SearchBar";

export default function TechNews(props) {
    return (
        <>
            <Navbar auth={props.auth} errors={props.errors}>
                
            </Navbar>

            <div className="h-64">
                <Footer></Footer>
            </div>
        </>
    );
}

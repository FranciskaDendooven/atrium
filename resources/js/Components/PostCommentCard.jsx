import { useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import PostCard from "@/Components/PostCard";

import React from "react";

export default function CommentCard(props) {

        const {data, setData, errors, post} = useForm({
            content:"",
            id:props.postId,
        });
    
        const handleSubmit = (e) => {
            e.preventDefault();
            setData({
                content: "",
            });
    
            post(route('submitNewComment'));
        };


    return (
        <>
            <form onSubmit={handleSubmit} className="m-2 p-2 max-w-md">
                
                    <label
                        htmlFor="comment"
                        className="font-medium text-gray-600">
                            <b>Comment:</b>
                    </label>
                    <textarea
                        id="comment"
                        type="text"
                        name="content"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg"
                        value={data.content}
                        onChange={(e)=>
                        setData("content", e.target.value)}
                    >
                        
                        <span className="text-red-600">
                            {errors.content}
                        </span>

                    </textarea>

                <div className="mt-2">
                    <button
                        type="submit" 
                        className="py-2 px-4 m-4 rounded-full text-white text-xl bg-lightBlue focus:outline-none"
                    >
                        Comment
                    </button>
                </div>
            </form>
            

        </>
    );
}

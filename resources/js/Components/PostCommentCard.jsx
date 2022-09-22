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
    
            post(route('submitNewComment'));
        };


    return (
        <>
            <form onSubmit={handleSubmit} className="m-2 p-2 max-w-md">
                
                    <label
                        htmlFor="comment"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                            Comment:
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
                        className="px-4 bg-blue-700 text-white rounded-md"
                    >
                        Comment
                    </button>
                </div>
            </form>
            

        </>
    );
}

import { useForm } from "@inertiajs/inertia-react";

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
            <form onSubmit={handleSubmit} className="ml-6 p-2 max-w-md">
                
                    <label
                        htmlFor="comment"
                        className="font-medium text-lightBlue">
                            <b className="">Comment:</b>
                    </label>
                    <textarea
                        id="comment"
                        type="text"
                        name="content"
                        rows="3"
                        className="block p-2.5 w-[675px] h-14 text-sm text-gray-900 bg-gray-50 rounded-lg"
                        value={data.content}
                        onChange={(e)=>
                        setData("content", e.target.value)}
                    >
                        
                        <span className="text-red-600">
                            {errors.content}
                        </span>

                    </textarea>

                <div className="ml-">
                    <button
                        type="submit" 
                        className="py-2 px-3 mt-2 ml-2 rounded-full text-white text-l bg-lightBlue focus:outline-none"
                    >
                        Comment
                    </button>
                </div>
            </form>
            

        </>
    );
}

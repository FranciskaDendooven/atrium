import React from "react";


export default function PostCommentText({comments}) {

        return (
            <>
            <section className="ml-7 h-20 bg-slate-100 mr-24 rounded-lg overflow-y-auto scrolling-touch">
                {comments.map((comment, id) => {
                 return (
                    <p key={id} className="ml-5 font-medium text-gray-600"><b>→{comment.user.name}: </b>{comment.content}</p>
                 )
                 })}
            </section>
            </>
            );
        } 

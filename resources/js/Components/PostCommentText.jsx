import React from "react";


export default function PostCommentText({comments}) {

        return (
            <>
            <section className="ml-5 h-20 overflow-y-auto scrolling-touch">
                {comments.map((comment, id) => {
                 console.log(comment);
                 return (
                    <p key={id} className="ml-5 font-medium text-gray-600"><b>→{comment.user.name}: </b>{comment.content}</p>
                 )
                 })}
            </section>
            </>
            );
        } 

import React from "react";


export default function PostCommentText({comments}) {

        return (
            <>
            <section>
                {comments.map((comment, id) => {
                 console.log(comment);
                 return (
                    <p key={id}>{comment.content}{comment.user.name}</p>
                 )
                 })}
            </section>
            </>
            );
        }
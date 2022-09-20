import React from "react";


export default function PostCommentText({comments}) {

        return (
            <>
            <td>
                {comments.map((comment, id) =>
                <p key={id}>{comment.username}{comment.content}</p>
                )}
            </td>
            </>
            );
        }
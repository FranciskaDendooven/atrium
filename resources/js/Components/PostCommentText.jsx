import React from "react";


export default function PostCommentText(props) {
    const {data, username, content, comment} = props.comment({
        content:"",
    });

}
    

        return (
            <>
            <div>
                <ul role="list" className="divide-y divide-gray-200 m-2 p-2">
                    <li className="py-4 flex flex-col">
                        <div className="text-sm">
                            Commented:
                                <span className="font-semibold ml-1">
                                    {data.username}
                                </span>
                        </div>
                        <div>
                        {data.content}
                        </div>
                    </li>
                </ul>
                </div>
            </>
            );
       
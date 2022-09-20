import React from "react";


export default function PostCommentText(props) {
    const {data, username, content, comment} = props.comment({
        content:"",
    });

}
    

        return (
            <>
            <Authenticated>
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
                
                <table className="table-fixed w-full">
                <thead>
                    <tr className="bg-darkblue text-white text-xl">
                        {/* <th className="px-4 py-2 w-20">No.</th> */}
                        <th className="px-4 py-2">username</th>
                        <th className="px-4 py-2">content</th>
                        <th className="px-4 py-2">
                            Action
                        </th>
                    </tr>
                </thead>
            <tbody>
                {props.comments.map(
                    ({ id, username, content }) => {
                        console.log(comments)
                        return (
                        
                            <tr key={id}>
                                
                                {/* <td className="border px-4 py-2">{ id }</td> */}
                                <td className="border px-4 py-2">
                                    {username}
                                </td>
                                <td className="border px-4 py-2">
                                    {content}
                                </td>
                                <td className="border px-4 py-2">
                                    <Link
                                        tabIndex="1"
                                        className="py-2 px-4 m-4 rounded text-white text-xl bg-lightBlue"
                                        href={route("showUpdatedPost", id)}
                                    >
                                        Edit
                                    </Link>

                                <button
                                    onClick={(e) => deleteMsg(e, id)}
                                    type="button"
                                    className="py-2 px-4 m-4 rounded text-white text-xl bg-redOrange"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                    })}

                {props.comments.length === 0 && (
                    <tr>
                        <td
                            className="px-6 py-4 border-t"
                            colSpan={4}
                        >
                            Be the first to comment!
                        </td>
                    </tr>
                )}
            </tbody>
            </table>
    
                </Authenticated>
            </>
            );
       
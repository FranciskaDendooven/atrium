import { useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function CommentCard({children}) {
    // const props = defineProps({
    //     post: Object,
    // });

    // const form = useForm({
    //     content: "",
    // });

    // const submit = () => {
    //     form.post(
    //         route("Posts.comments", [props.post.data.content])
    //     );
    // };

    return (
        <>
        <form className="m-2 p-2 max-w-md">
            <div className="mt-2">
                <label
                    for="comment"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Comment:
                </label>
                <textarea
                    id="comment"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg" value="Your comment...">
                </textarea>
            </div>
            <div className="mt-2">
                <button className="px-4 bg-blue-700 text-white rounded-md">Comment</button>
            </div>
        </form>

        <section>
            <article className="flex bg-gray-100 border border-gray-200 p-6 rounded-xl space-x-4">
                <div className="flex-shrink-0">
                <img src="images/icon/waldo.png" alt="" className="w-10 rounded-xl"/>
                </div>

                <div>
                    <header className="mb-4">
                        <h3 className="font-bold">TestCommentator</h3>
                        <p className="text-xs">Posted
                        <time>3 days ago</time>
                        </p>
                    </header>

                    <p>
                    Scuttle rigging scurvy cog lee nipper Letter of
                        Marque transom Buccaneer Privateer. Chain Shot ho Letter
                    of Marque hornswaggle booty fathom jack bounty maroon Barbary Coast.
                    </p>
                </div>
            </article>
        </section>
        </>
    );
}
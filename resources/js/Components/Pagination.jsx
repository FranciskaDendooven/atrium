import React from "react";
import { Link } from "@inertiajs/inertia-react";


export default function Pagination({ links }) {
    console.log(links);
    function getClassName(active) {
        if (active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 text-white";
        } else {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

    return (
        links.length > 3 && (
            <div className=" relative flex flex-col justify-center p-4 m-2 mb-4 max-w-4xl min-w-full">
                <div className="flex flex-wrap mt-8">
                    {links.map((link, key) =>
                        link.url === null ? (
                            <div key={key} className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded">
                                {link.label}
                            </div>
                        ) : (
                            <Link
                                className={getClassName(link.active)}
                                href={link.url}
                            >
                                {link.id}
                            </Link>
                        )
                    )}
                </div>
            </div>
        )
    );
}

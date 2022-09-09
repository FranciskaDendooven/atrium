import React from "react";

export default function Title(props) {

    return (
        <section>
            <h1 className="font-bold text-gray-200 text-2xl">{props.title}</h1>
        </section>
    );
}

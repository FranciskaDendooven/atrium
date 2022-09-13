import React from "react";

export default function CentralLogo(props) {
    return (
        <div className="max-w-100px p-10 rounded-full bg-white flex items-center justify-center">
            <img
                src={props.src}
                width={props.width}
                alt={props.alt}
            />
        </div>
    );
}

import React from "react";

export default function CentralLogo(props) {
    return (
        <div className="max-w-100px p-6 rounded-full bg-white flex items-center justify-center">
            <img
                src={props.src}
                width="150px"
                alt="User Avatar picture"
            />
        </div>
    );
}

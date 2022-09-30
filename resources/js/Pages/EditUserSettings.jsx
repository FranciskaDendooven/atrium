import React, { useState } from "react";
import { Head, useForm, usePage, Link } from "@inertiajs/inertia-react";

export default function UserSettings(props) {
    // const user = props;
    // console.log(user);
    console.log(props.auth.user.id);

    const { data, setData, post, errors } = useForm({
        username: "",
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("submitNewUserSettings", props.auth.user.id));
    };

    return (
        <>
            <Head title="User Settings" />
            <div className="flex flex-col justify-center place-items-center my-20">
                <div className="flex flex-col justify-center items-center p-4 m-5 max-w-4xl min-w-3/4 bg-white rounded-xl border-2 border-darkblue shadow-md">
                   <h1 className="my-4"> Change your settings</h1>
    
                         <section className="flex items-start my-4 mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-redOrange rounded-full focus:outline-none"
                                    href={route("userSettings")}
                                >
                                    Back
                                </Link>
                            </section>
            
                    <section className="flex flex-col justify-center w-96 mx-20 my-10">
                        <form name="updateUserSettings" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <label className="">User Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full"
                                        label="UserName"
                                        name="username"
                                        value={data.username}
                                        errors={errors.username}
                                        onChange={(e) =>
                                            setData("username", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.username}
                                    </span>
                                </div>

                                <div className="mb-0 mt-4">
                                    <label className="">Email</label>
                                    <input
                                        type="email"
                                        className="mt-1 block w-full"
                                        label="email"
                                        name="email"
                                        value={data.email}
                                        errors={errors.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.email}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="px-6 py-2 font-bold text-white bg-lightBlue rounded"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}

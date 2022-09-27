import React, { useState } from "react";
import Navbar from "@/Layouts/Navbar";
import { Head, useForm, usePage, Link } from "@inertiajs/inertia-react";


export default function UserSettings(props) {
    // const user = props;
    // console.log(user);
    console.log(props.auth.user.id);

    const { data, setData, post, errors } = useForm({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('submitNewUserSettings', props.auth.user.id));
    };

    return (
        <>
            <Navbar auth={props.auth} errors={props.errors}></Navbar>

            <Head title="User Settings" />

            <div className="flex flex-col items-center sm:items-center sm:pt-10">
          

                {/* ////////////////////////// Begin form section ///////////////////////////////////*/}

                <section className="flex flex-col w-96 mb-20">
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
                        <div className="mb-0 mt-4">
                            <label className="">Password</label>
                            <input
                                type="password"
                                className="mt-1 block w-full"
                                label="password"
                                name="password"
                                value={data.password}
                                errors={errors.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.password}
                            </span>
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

                {/* ///////////////////////// end form section ////////////////////////////// */}

            </div>

        </>
    );
}

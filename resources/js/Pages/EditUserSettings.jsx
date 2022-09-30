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
            <div className="grid justify-center py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div  id="changeUserSettingspage" className="w-[700px] bg-white overflow-hidden shadow-sm rounded-xl border-2 border-darkblue sm:rounded-lg p-8">
                   <h1 className="my-4 font-bold">Change your settings</h1>
    
                         <section className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-redOrange rounded-full focus:outline-none"
                                    href={route("userSettings")}
                                >
                                    Back
                                </Link>
                            </section>
            
                    <section className="flex flex-col">
                        <form name="updateUserSettings" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <label className="">User Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-md"
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

                                <div className="flex flex-col mt-4">
                                <div className="mb-0">
                                    <label className="">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 rounded-md"
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
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="py-2 px-3 ml-2 rounded-full text-white text-l bg-lightBlue focus:outline-none"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
            </div>
        </>
    );
}

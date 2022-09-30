import React, { useEffect } from "react";
import Navbar from "@/Layouts/Navbar";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Label from "@/Components/Label";
import { Head, useForm, usePage, Link } from "@inertiajs/inertia-react";

export default function updatePassword( props ) {
    const { data, setData, post, errors} = useForm({
        password: "",
        password_confirmation: "",
        current_password: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("updatePassword", props.auth.user.id));
    };

    return (
        <>
            <Head title="Reset Password" />
            <div className="grid justify-center py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div id="changePasswordPage" className="w-[700px] bg-white overflow-hidden shadow-sm rounded-xl border-2 border-darkblue sm:rounded-lg p-8">
                <h1 className="my-4 font-bold"> Change your password</h1>
    
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
                            <Label forInput="current_password" value="Current Password" />
                            <Input
                                type="password"
                                name="current_password"
                                className="w-full px-4 py-2 rounded-md"
                                handleChange={onHandleChange}
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                        <div className="mb-4">
                            <Label forInput="password" value="New Password" />
                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="w-full px-4 py-2 rounded-md"
                                autoComplete="new-password"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                            </div>
                        </div>

                        <div className="flex flex-col mt-4">
                        <div className="mb-0">
                            <Label
                                forInput="password_confirmation"
                                value="Confirm new Password"
                            />
                            <Input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="w-full px-4 py-2 rounded-md"
                                autoComplete="new-password"
                                handleChange={onHandleChange}
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>
                        </div>

                        <div className="mt-4">
                            <Button 
                            type="submit"
                            className="py-2 px-3 ml-2 rounded-full text-white text-l bg-lightBlue focus:outline-none">
                                Submit
                            </Button>
                        </div>
                        </div>
                    </form>
                    </section>
                </div>
            </div>
            </div>
        </>
    );
}

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
             <Navbar auth={props.auth} errors={props.errors}></Navbar>
            <Head title="Reset Password" />
            <div className="flex flex-col justify-center items-center my-20">
                <div className="flex flex-col justify-center p-4 m-5 max-w-4xl min-w-3/4 bg-white rounded-xl border-2 border-darkblue shadow-md">
                    <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                            <Label forInput="current_password" value="Current Password" />
                            <Input
                                type="password"
                                name="current_password"
                                //value=""
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <Label forInput="password" value="New Password" />
                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <Label
                                forInput="password_confirmation"
                                value="Confirm new Password"
                            />
                            <Input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                handleChange={onHandleChange}
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Button className="ml-4" type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

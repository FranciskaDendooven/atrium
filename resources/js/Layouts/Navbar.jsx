import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import WaldoIcon from "@/Components/WaldoIcon";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import ApplicationLogoFont from "@/Components/ApplicationLogoFont";

export default function Navbar({ auth, children }) {
    //    console.log(auth);
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <div className="flex">
                <div className="shrink-0 flex items-center">
                    <Link href="/">
                        <ApplicationLogoFont className="block h-9 w-auto text-gray-500" />
                    </Link>
                </div>

                <div className="hidden sm:flex sm:items-center sm:ml-6">
                    <div className="ml-3 relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                    Code
                                    <svg
                                        className="ml-2 -mr-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link
                                    href={route("showPosts")}
                                    method="get"
                                    as="button"
                                >
                                    Code QA
                                </Dropdown.Link>

                                <Dropdown.Link
                                    href={route("codeShare")}
                                    method="get"
                                    as="button"
                                >
                                    Code Share
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                        <NavLink
                            href={route("brainFarts")}
                            active={route().current("brainFarts")}
                        >
                            BrainFarts
                        </NavLink>

                        <NavLink
                            href={route("pif")}
                            active={route().current("pif")}
                        >
                            PIF
                        </NavLink>

                        <NavLink
                            href={route("techNews")}
                            active={route().current("techNews")}
                        >
                            Tech News
                        </NavLink>

                        <NavLink
                            href={route("techNews")}
                            active={route().current("techNews")}
                        >
                            Bots
                        </NavLink>
                    </div>

                    {auth.user ? (
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                    <WaldoIcon className="block h-9 w-auto text-gray-500" />
                                    <svg
                                        className="ml-2 -mr-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link
                                    href={route("userProfile")}
                                    method="get"
                                    as="button"
                                >
                                    Profile
                                </Dropdown.Link>

                                <Dropdown.Link
                                    href={route("userSettings")}
                                    method="get"
                                    as="button"
                                >
                                    Edit Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Log in
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {children}
        </>
    );
}

import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import WaldoIcon from "@/Components/WaldoIcon";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import ApplicationLogoFont from "@/Components/ApplicationLogoFont";

export default function Navbar({ auth, children, active }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <div className="max-w-7xl mx-auto my-2 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogoFont className="block h-14 w-auto text-gray-500" />
                            </Link>
                        </div>

                        <div className=" flex justify-between ... ">
                            <div className="hidden space-x-40 sm:-my-px ml-10 sm:flex sm:items-center ">
                                <div className="ml-20 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className={
                                                        active
                                                            ? "inline-flex items-center px-1 pt-1 font-extrabold text-gray-900 hover "
                                                            : "inline-flex items-center px-1 pt-1 text-lg font-semibold text-gray-500 hover:text-gray-900 hover"
                                                    }
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
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("showQAPosts")}
                                                method="get"
                                                as="button"
                                            >
                                                Code QA
                                            </Dropdown.Link>

                                            <Dropdown.Link
                                                href={route(
                                                    "showCodeSharePosts"
                                                )}
                                                method="get"
                                                as="button"
                                            >
                                                Code Share
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="hidden space-x-20 sm:-my-px ml-20 sm:flex">
                                <NavLink
                                    href={route("showBrainFartsPosts")}
                                    active={route().current(
                                        "bshowBrainFartsPosts"
                                    )}
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
                                    href={route("Bots")}
                                    active={route().current("Bots")}
                                >
                                    Bots
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    {auth.user ? (
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <div className="shrink-0 flex items-center">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-3 border-4 border-darkblue leading-4 rounded-full bg-white"
                                                >
                                                    <WaldoIcon className="block h-10 w-auto text-gray-500" />
                                                </button>
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
                                            </div>
                                        </span>
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
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative">
                                    <Link
                                        href={route("login")}
                                        className="py-2 px-6 m-4 rounded-full font-bold text-white text-xl bg-darkblue
                                        hover:text-darkblue hover:bg-white border-4 border-darkblue focus:outline-none transition duration-150 ease-in-ou"
                                    >
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}

                    {children}

                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

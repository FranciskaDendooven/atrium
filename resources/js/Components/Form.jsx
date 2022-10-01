import React from "react";

export default function Form() {
    return (
        <>
            <section className="flex flex-col">
                <section className="items-center justify-center font-bold">
                    <h2 className="text-3xl">Button Bot</h2>
                </section>
                <form name="buttonBot">
                    <div className="flex flex-col">
                        <div className="m-4">
                            <label className="">Morning Button</label>
                            <textarea
                                type="text"
                                className="w-full px-4 py-2 rounded-md"
                                label="Morning"
                                name="Morning"
                            />
                        </div>

                        <div className="m-4">
                            <label className="">Lunch Button</label>
                            <textarea
                                type="text"
                                className="w-full px-4 py-2 rounded-md"
                                label="Lunch"
                                name="Lunch"
                            />
                        </div>

                        <div className="m-4">
                            <label className="">Afternoon Button</label>
                            <textarea
                                type="text"
                                className="w-full px-4 py-2 rounded-md"
                                label="Afternoon"
                                name="Afternoon"
                            />
                        </div>

                        <div className="m-4">
                            <label className="">Evening Button</label>
                            <textarea
                                type="text"
                                className="w-full px-4 py-2 rounded-md"
                                label="evening"
                                name="evening"
                            />
                        </div>

                        <div className="m-4">
                            <label className="">From who?</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-md"
                                label="FromWho"
                                name="FromWho"
                            />
                        </div>

                        <div className="m-4">
                            <label className="">Class or role</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-md"
                                label="Class"
                                name="Class"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="py-2 px-5 ml-2 rounded-full text-white text-l bg-lightBlue focus:outline-none"
                        >
                            Send!
                        </button>
                    </div>
                </form>

                <br />
                <br />
                <br />
                <br />

                <section className="items-center justify-center font-bold">
                    <h2 className="text-3xl">Compliment Bot</h2>
                </section>
                <form name="buttonBot">
                    <div className="flex flex-col">
                        <div className="m-4">
                            <label className="">
                                Who'd you like to compliment?
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-md"
                                label="Who"
                                name="Who"
                            />
                        </div>

                        <div className="m-4">
                            <label className="">
                                What would you like to say?
                            </label>
                            <textarea
                                type="text"
                                className="w-full px-4 py-2 rounded-md"
                                label="Compliment"
                                name="Compliment"
                            />
                        </div>

                        <div className="m-4">
                            <label className="">From who?</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-md"
                                label="FromWho"
                                name="FromWho"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="py-2 px-5 ml-2 rounded-full text-white text-l bg-lightBlue focus:outline-none"
                        >
                            Send!
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}
import React from "react";

export default function Form() {
    return (
        <>
            <section className="flex flex-col">
                <section className="items-center justify-center font-bold">
                    <h2 className="text-3xl">Button Bot</h2>
                </section>

                <section className="items-center justify-center ">
                    <p>
                        <b>The button bot!</b><br/>
                        This bot is very friendly. <br />
                        Loves to get our attention just before it's time to push that attendance
                        button on MyBecode.<br />
                        But somtimes we may grow fatigued of it's messages,
                        <br />
                        which means it's time to update it's vocabulary! <br />
                    </p>
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
                <section className="items-center justify-center ">
                    <p>
                    <b>The compliment bot!</b><br/>
                        This bot spreads compliments, <br />
                        and loves to make someone's day when popping by surprise on the server with a "Thank you @becodian!"<br />
                        Someone deserving of a pat on the shoulder? <br /> 
                        Show you appreciation and write a message for the bot to share and bring some love to Discord <br />
                    </p>
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
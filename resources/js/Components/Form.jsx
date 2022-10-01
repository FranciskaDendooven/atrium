import React from "react";

export default function Form() {
    return (
        <>
            <div className="col-span-6 sm:col-span-3">
                <h3>Button Bot</h3>
                <label
                    htmlFor="Morning Button Message"
                    className="block text-sm font-medium text-gray-900"
                >
                    Morning Button Message
                </label>
                <input
                    type="text"
                    name="Morning Button Message"
                    id="morning"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="Lunch Button Message"
                    className="block text-sm font-medium text-gray-900"
                >
                    Lunch Button Message
                </label>
                <input
                    type="text"
                    name="Lunch Button Message"
                    id="lunch"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="Afternoon Button Message"
                    className="block text-sm font-medium text-gray-900"
                >
                    Afternoon Button Message
                </label>
                <input
                    type="text"
                    name="Afternoon Button Message"
                    id="Afternoon"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="Evening Button Message"
                    className="block text-sm font-medium text-gray-900"
                >
                    Evening Button Message
                </label>
                <input
                    type="text"
                    name="Evening Button Message"
                    id="Evening"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Save
                </button>
            </div>

            <br />
            <br />
            <br />
            <br />
             <h3>Compliment Bot</h3>
            <div className="col-span-6 sm:col-span-3">
               
                <label
                    htmlFor="coachC"
                    className="block text-sm font-medium text-gray-900"
                >
                    Which coach 
                </label>
                <input
                    type="text"
                    name="coachC"
                    id="coach"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="Lunch Button Message"
                    className="block text-sm font-medium text-gray-900"
                >
                    From who is the compliment
                </label>
                <input
                    type="text"
                    name="Lunch Button Message"
                    id="lunch"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="Afternoon Button Message"
                    className="block text-sm font-medium text-gray-900"
                >
                    compliment
                </label>
                <input
                    type="text"
                    name="Afternoon Button Message"
                    id="Afternoon"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="Evening Button Message"
                    className="block text-sm font-medium text-gray-900"
                >
                    Evening Button Message
                </label>
                <input
                    type="text"
                    name="Evening Button Message"
                    id="Evening"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Save
                </button>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

         
ù        </>
    );
}
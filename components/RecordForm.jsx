// /components/RecordForm.jsx

import React, { useState } from "react";
import { useRouter } from "next/router";

const RecordForm = (props) => {
    const { data, onSubmit } = props;
    const router = useRouter();
    const [entry, setEntry] = useState(data);

    const updateEntry = (type, value) => {
        setEntry({ ...entry, [type]: value });
    };

    const handleCancel = () => {
        router.push("/");
    }

    return (
        <div className="flex justify-center p-4">
            <div className="border p-4 rounded-md shadow-sm flex flex-col gap-4 w-full max-w-80 bg-white">
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="Name"
                        value={entry.Name}
                        onChange={(e) => updateEntry("Name", e.target.value)}
                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder-gray-400"
                        placeholder="Name"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="Email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Email
                    </label>
                    <textarea
                        id="Email"
                        rows="1"
                        value={entry.Email}
                        onChange={(e) => updateEntry("Email", e.target.value)}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                        placeholder="Email"
                    ></textarea>
                </div>
                <div>
                    <label
                        htmlFor="Birth"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Birth Date
                    </label>
                    <textarea
                        id="birth"
                        rows="1"
                        value={entry.Birth}
                        onChange={(e) => updateEntry("Birth", e.target.value)}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                        placeholder="Birth date"
                    ></textarea>
                </div>
                <div>
                    <label
                        htmlFor="Year"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Year
                    </label>
                    <textarea
                        id="Year"
                        rows="1"
                        value={entry.Year}
                        onChange={(e) => updateEntry("Year", e.target.value)}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                        placeholder="Year"
                    ></textarea>
                </div>
                <div className="w-full flex justify-center gap-4">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => onSubmit(entry)}
                        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        {entry._id ? "Update" : "Create"}
                    </button>
                </div>
            </div>
        </div>
    );

};

export default RecordForm;
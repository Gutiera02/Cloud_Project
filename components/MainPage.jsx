// /components/MainPage.jsx

// /components/MainPage.jsx

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteRecord, getRecords } from "@/utils/recordsFunctions";

const MainPage = () => {
    const router = useRouter();
    const [records, setRecords] = useState([]);

    const fetchRecords = async () => {
        try {
            const response = await getRecords();

            setRecords(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteRecord = async (id) => {
        try {
            const response = await deleteRecord(id);

            if (response.deletedCount === 1) {
                const newRecords = records.filter((record) => record._id !== id);
                setRecords(newRecords);
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleUpdateRecord = (id) => {
        router.push(`/records/edit?id=${id}`);
    };

    useEffect(() => {
        fetchRecords();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {records.map((record) => (
                <div
                    className="bg-white border border-gray-200 rounded-lg shadow-lg p-6"
                    key={record._id}
                >
                    <h5 className="text-lg font-bold mb-4">{record.id}</h5>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Name:</span> {record.Name}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Grade:</span> {record.Grade}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Semester:</span> {record.Semester}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Ethnicity:</span> {record.Ethnicity}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Year:</span> {record.Year}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Email:</span> {record.Email}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Birth Date:</span> {record.Birth}
                    </p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <button
                            type="button"
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium"
                            onClick={() => handleUpdateRecord(record._id)}
                        >
                            Update
                        </button>
                        <button
                            type="button"
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium"
                            onClick={() => handleDeleteRecord(record._id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );

};


export default MainPage;
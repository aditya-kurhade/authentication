import React from "react";
import {Link} from "react-router-dom";

export default function Homepage() {
    return ( 
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4 py-12">
            <div className="max-w-3xl w-full bg-white p-10 rounded-2xl shadow-xl text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Welcome to Our Application</h1>
                <p className="text-lg text-gray-700 mb-6">This is the home page. Please Register!. To check does authentication work, please register or login.</p>
                <div className="space-x-4">
                    <Link to="/register" className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-150">
                        Register
                    </Link>
                    <Link to="/login" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-150">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
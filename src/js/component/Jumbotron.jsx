import React from 'react';

export function Jumbotron() {
        return (
            <div className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg p-8">
                        <h2 className="text-3xl font-semibold text-gray-800">Welcome to Our Website</h2>
                        <p className="mt-4 text-gray-600">This is a simple jumbotron built using Tailwind CSS.</p>
                        <a href="#" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        Learn More </a>
                    </div>
                </div>
            </div>
        );
    }
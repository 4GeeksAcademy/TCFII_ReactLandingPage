import React from 'react';

export function Card() {
        return (
            /*<div className ='w-full bg-red-100 rounded flex flex-col items-center justify center h-10'>*/
                <div className="max-w-xs mx-auto bg-gray-500 shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-white px-4 py-2">
                        <h2 className="text-gray-800 text-xl font-semibold">Card Title</h2>
                        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="flex justify-end px-4 pb-4">
                        <a href="#" className="text-sm bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">Read More</a>
                    </div>
                </div>
            /*</div>*/
        );
    }
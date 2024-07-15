import React from 'react';

export function Card() {
        return (
            /*<div className ='w-full bg-red-100 rounded flex flex-col items-center justify center h-10'>*/
                <div className="max-w-xs mx-auto bg-gray-500 shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-white px-4 py-2">
                        <h2 className="text-gray-800 text-xl font-semibold font-bold flex justify-center items-center">Card Topper</h2>
                        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <div>
                            <h1 className="font-bold flex justify-center items-center">Card Title</h1>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat accumsan felis. Etiam eget rhoncus dui. Donec mattis dignissim consectetur. Lorem ipsum dolor sit amet.
                        </div>
                        <div>
                        <a href="#" className="text-sm  bg-blue-500 flex justify-center hover:bg-blue-600 text-white py-1 px-3 rounded">Read More</a>
                        </div>
                    </div>
                </div>
            /*</div>*/
        );
    }
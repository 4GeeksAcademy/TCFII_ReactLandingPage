import React from 'react';

export function Card() {
        return (
            /*<div className ='bg-red-100 rounded flex flex-col items-center justify center h-10'>*/
                <div className="w-2/3 mx-auto bg-gray-500 shadow-lg rounded-lg overflow-hidden">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://placehold.co/500x325" alt="image description"/>
                    </div>
                    <div>
                        <div>
                            <h1 className="font-bold flex justify-center items-center">Card Title</h1>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat accumsan felis. Etiam eget rhoncus dui. Donec mattis dignissim consectetur. Lorem ipsum dolor sit amet.
                        </div>
                        <div className="flex justify-center items-center">
                        <button><a href="#" className="text-sm  bg-blue-500 flex justify-center hover:bg-blue-600 text-white py-1 px-3 rounded">Read More</a></button>
                        </div>
                    </div>
                </div>
            /*</div>*/
        );
    }
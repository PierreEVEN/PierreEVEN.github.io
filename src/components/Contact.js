// src/components/Contact.js

import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">

                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-400 leading-relaxed">
                                evenpierre@orange.fr
                            </a>
                        </div>
                    </div>
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                DISCORD
                            </h2>
                            <a className="text-indigo-400 leading-relaxed">
                                pierre#4897
                            </a>
                        </div>
                    </div>
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                TWITTER
                            </h2>
                            <a className="text-indigo-400 leading-relaxed">
                                @ePierre_dev
                            </a>
                        </div>
                    </div>
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className=" px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                GITHUB
                            </h2>
                            <a className="text-indigo-400 leading-relaxed" href="https://github.com/PierreEVEN">
                                https://github.com/PierreEVEN
                            </a>
                        </div>
                    </div>
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className=" px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                YOUTUBE
                            </h2>
                            <a className="text-indigo-400 leading-relaxed" href="
                                https://www.youtube.com/channel/UCpKW2uF9wbCsqMeTuHugijw">
                                pierre EVEN
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
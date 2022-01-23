// src/components/Projects.js

import React from "react";
import {game_engines, games, other} from "../../data";

function GameEngines() {
    return Project(game_engines, "3D Game engines", "\n" +
        "                        Passionate in game development, and by the way a fan of space simulations, I unfortunately\n" +
        "                        quickly came up against the limitations of existing game engines.\n" +
        "                        That's why I decided to do some research to creating my own game engine.\n" +
        "                        \n" +
        "                        The projects presented on this page are mostly unfinished and were made for learning purposes.");
}

function Games() {
    return Project(games, "Games", "");
}

function Other() {
    return Project(other, "Other", "stuff I made that are not games or game engines");
}

export {GameEngines, Games, Other};

function Project(content, title, description) {
    return (
        <section id="GameEngine" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto lg:px-40">
                <div className="flex flex-col w-full mb-20 text-center ">
                    <h1 className="sm:text-6xl text-3xl font-medium title-font mb-4 text-white">
                        {title}
                    </h1>
                    <p>
                        {description}
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {content.map((project) => (
                        <div className="flex flex-col w-full mb-20">
                            <hr/>
                            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center m-4">
                                <a href={project.link}
                                   className=" focus:outline-none hover:bg-gray-700 hover:text-white">
                                    {project.title}
                                </a>
                            </h1>
                            <h2 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-white m-4">
                                Presentation
                            </h2>
                            <div className="  flex flex-wrap">
                                <div className="lg:w-1/2">
                                    <div>
                                        <p className="mt-1">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="mt-1">
                                            <a href={project.link} className="text-indigo-400 leading-relaxed">
                                                {project.link}
                                            </a>
                                        </p>
                                    </div>
                                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md divide-x ">
                                        <div className=" px-6 mt-4 w-full ">
                                            <table className="table-auto w-full">
                                                <tbody className="text-left whitespace-nowrap">
                                                {project.languages instanceof Object ?
                                                    (
                                                        <tr>
                                                            <td><li>langages</li></td>
                                                            <td>{project.languages.map((language) => (language.name + ", "))} </td>
                                                        </tr>
                                                    ) : ""}
                                                {project.libs instanceof Object ?
                                                    (
                                                        <tr>
                                                            <td><li>libraries</li></td>
                                                            <td>{project.libs.map((lib) => (lib.name + ", "))}</td>
                                                        </tr>
                                                    ) : ""}
                                                {project.graphics instanceof Object ?
                                                    (
                                                        <tr>
                                                            <td><li>graphics</li></td>
                                                            <td>{project.graphics.name}</td>
                                                        </tr>
                                                    ) : ""}

                                                {project.start ?
                                                    (
                                                        <tr>
                                                            <td><li>start</li></td>
                                                            <td>{project.start}</td>
                                                        </tr>
                                                    ) : ""}

                                                {project.duration ?
                                                    (
                                                        <tr>
                                                            <td><li>duration</li></td>
                                                            <td>{project.duration}</td>
                                                        </tr>
                                                    ) : ""}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 border-solid border-2 border-gray-500 shadow-xl">
                                    <img
                                        alt="gallery"
                                        className="object-center"
                                        src={project.image}
                                    />
                                </div>
                            </div>

                            {project.features ?
                                <h2 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-white m-4">
                                    Key features
                                </h2> : ""}
                            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                                <div className="">
                                    {project.features ? project.features.map((feature) => (
                                        <div className="flex relative px-6 mt-4 ">
                                            <div className="lg:">
                                                <h3 className="sm:text-1xl text-1xl font-medium title-font mb-4 text-white">
                                                    {feature.name}
                                                </h3>
                                                <p>
                                                    {feature.description}
                                                </p>
                                            </div>
                                            <div className="flex relative px-6 mt-4 ">
                                                {feature.image ?
                                                    <img className="inset-0 object-cover object-left"
                                                         src={feature.image}/> : ""}
                                            </div>
                                        </div>
                                    )) : ""}
                                </div>
                            </div>

                            <h2 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-white">
                                Gallery
                            </h2>
                            <div className="container grid grid-cols-4 gap-2 mx-auto">
                                {project.gallery ? project.gallery.map((element) => (
                                    <div className="class=w-full rounded">
                                        {element.youtube ? <iframe src={element.youtube}
                                                                   className="inset-0 w-full h-full object-cover object-center"
                                                                   title="YouTube video player" frameBorder="0"
                                                                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                   allowFullScreen></iframe> : ""}
                                        {element.image ?
                                            <a href={element.image}  target="_blank">
                                            <img className="inset-0 w-full h-full object-cover object-center"
                                                 src={element.image} alt="image"/> </a>: ""}
                                    </div>

                                )) : ""}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export const projects = [
    {
        title: "3D Game engine",
        subtitle: "personal 3D game engines I'm working on",
        description: "",
        image: "https://user-images.githubusercontent.com/24438631/136795565-0bfdb609-ef96-44de-9579-f8c0b2a79f83.png",
        link: "GameEngines",
    },
    {
        title: "Games",
        subtitle: "Game I made in solo, or with peoples",
        description: "",
        image: "https://user-images.githubusercontent.com/24438631/150693061-23689e9d-7b62-4396-b706-0d510ff6ebde.png",
        link: "Games",
    },
    {
        title: "Misc",
        subtitle: "Stuff I've done that are not games or engines",
        description: "",
        image: "https://cdn.discordapp.com/attachments/837400074341318656/934886528948244600/unknown.png",
        link: "Other",
    },
];

export const languages = {
    HLSL: {
        name: "HLSL",
    },
    GLSL: {
        name: "GLSL",
    },
    Cpp: {
        name: "C++",
    },
    Java: {
        name: "Java",
    },
    JS: {
        name: "JavaScript",
    },
    C: {
        name: "C",
    },
    Csharp: {
        name: "C#",
    },
    Blueprint: {
        name: "Blueprint",
    },
}
export const apis = {
    OpenGL: {
        name: "OpenGL",
    },
    Vulkan: {
        name: "Vulkan",
    },
    Unity: {
        name: "Unity",
    },
    UE4: {
        name: "Unreal engine 4",
    },
}
export const libs = {
    spirv_reflect: {
        name: "spirv-reflect",
    },
    imgui: {
        name: "imgui",
    },
    joml: {
        name: "joml",
    },
    imguizmo: {
        name: "imguizmo",
    },
    glfw: {
        name: "glfw",
    },
    glm: {
        name: "glm",
    },
    glslang: {
        name: "glslang",
    },
    lwjgl: {
        name: "lwjgl",
    },
    pngdecoder: {
        name: "pngdecoder",
    },
    assimp: {
        name: "assimp",
    },
    glad: {
        name: "glad",
    },
    stbi: {
        name: "stbi",
    },
    magicavoxel: {
        name: "magica voxel",
    },
    substancepainter: {
        name: "substance painter",
    },
    wwise: {
        name: "WWise",
    },
    blender: {
        name: "blender",
    },
    threejs: {
        name: "Three.JS",
    },
    emscripten: {
        name: "emscripten",
    },
};


export const game_engines = [
    {
        title: "Headless Engine",
        languages: [languages.Cpp, languages.HLSL, languages.GLSL],
        graphics: apis.Vulkan,
        description: "After 3 years of research and experimentation, I've decided to begin the development of a game using my own engine. It is currently in an early stage, but having a goal should help me stay focused on the priority features",
        image: "https://user-images.githubusercontent.com/24438631/136795565-0bfdb609-ef96-44de-9579-f8c0b2a79f83.png",
        link: "https://github.com/PierreEVEN/HeadlessEngine",
        start: "Sept 2021",
        duration: "Still in progress",
        libs: [libs.glm, libs.glslang, libs.spirv_reflect, libs.imgui, libs.imguizmo],
        gallery: [
            {
                image: "https://user-images.githubusercontent.com/24438631/136795565-0bfdb609-ef96-44de-9579-f8c0b2a79f83.png",
            },
        ],
    },
    {
        title: "Coffee 3D",
        languages: [languages.Java, languages.GLSL],
        graphics: apis.OpenGL,
        description: "A java game engine made for my 2nd year tutored project at the IUT Robert Shuman. Initially planned to be a 2D engine, I finally decided to switch to 3D",
        image: "https://user-images.githubusercontent.com/24438631/111083391-a25cec80-850d-11eb-915d-396abed79d8d.png",
        libs: [libs.lwjgl, libs.joml, libs.pngdecoder, libs.imgui],
        start: "October 2020",
        duration: "2 months",
        link: "https://github.com/PierreEVEN/Coffee3D",

        features: [
            {
                name: "Advanced editor",
                description: "Full editor with level edition and asset management",
            },
            {
                name: "Post processing",
                description: "Basic post process effects like bloom or outlines",
            },
            {
                name: "Pathfinding",
                description: "Pathfinding using an A* algorithm",
            },
            {
                name: "Shadows",
                description: "Basic shadows",
            },
        ],
        gallery: [
            {
                youtube: "https://www.youtube.com/embed/ef-brQbH5FE",
            },
            {
                youtube: "https://www.youtube.com/embed/srNc9CzwyKQ",
            },
            {
                youtube: "https://www.youtube.com/embed/8R6M83ooCxI",
            },
            {
                youtube: "https://www.youtube.com/embed/JiN4Cm1TBZ0",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/111083389-a1c45600-850d-11eb-9c58-bc44b6b861e3.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/111083391-a25cec80-850d-11eb-915d-396abed79d8d.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/111083392-a2f58300-850d-11eb-942a-61ed79c7bba6.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/111083393-a38e1980-850d-11eb-9c8a-e87aed85a054.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/111083394-a38e1980-850d-11eb-9c32-261c7a9ac672.png",
            },
        ],
    },
    {
        title: "VkEngine",
        description: "This is my first Vulkan renderer. It has a lot of issues but was a base of experimentation on multiple new technologies",
        languages: [languages.Cpp, languages.GLSL],
        libs: [libs.assimp],
        graphics: apis.Vulkan,
        image: "https://user-images.githubusercontent.com/24438631/100238685-c7aef600-2f30-11eb-9e6f-488f19a76aa7.png",
        link: "https://github.com/PierreEVEN/VkEngine",
        start: "Jun 2020",
        duration: "3 months",
        features: [
            {
                name: "Automatic code reflection",
                description: "Automatically parse C++ code then generate a meta class before compilation to handle code reflection features (factories, class serialisation...) Very similar to Unreal Engine's implementation.",
                image: "https://user-images.githubusercontent.com/24438631/100238498-90d8e000-2f30-11eb-9c5b-99afe821c7c5.png",
            },
            {
                name: "GLTF model loader",
                description: "Custom GLTF import tool"
            },
            {
                name: "Shader hot-reload with embedded editor",
                description: "Edit shaders within the engine without restarting it. Shaders are compiled in parallel jobs then applied on succeed"
            },
            {
                name: "Job system",
                description: "Tasks are scheduled on parallel jobs. Handle partially job dependencies"
            }
        ],
        gallery: [
            {
                youtube: "https://www.youtube.com/embed/NY4k38Y09-o",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/100238685-c7aef600-2f30-11eb-9e6f-488f19a76aa7.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/100238633-bc5bca80-2f30-11eb-8173-ccb643e4b3c1.png",
            },
        ],
    },
    {
        title: "GLEngine",
        description: "My first game engine project. And also the first time I used C++ outside Unreal Engine",
        languages: [languages.Cpp, languages.GLSL],
        graphics: apis.OpenGL,
        image: "https://github.com/PierreEVEN/GLEngine/raw/master/Showcase/Dynamic_thumbnails.png?raw=true",
        link: "https://github.com/PierreEVEN/GLEngine",
        libs: [libs.assimp, libs.glfw, libs.glad, libs.stbi, libs.glm],
        start: "September 2019",
        duration: "4 months",

        features: [
            {
                name: "Simple lighting",
                description: "Allow usage of basic lights like spot, point, and directional sources"
            },
            {
                name: "Physic",
                description: "Rigid body collisions using Bullet3D"
            },
            {
                name: "Asset serialisation",
                description: "Custom binary asset format"
            },
            {
                name: "Profiler",
                description: "Easy to use CPU profiling tools"
            },
            {
                name: "Landscape",
                description: "Procedural landscape generation tools"
            },
        ],
        gallery: [
            {
                youtube: "https://www.youtube.com/embed/n23T4ktsU0o",
            },
            {
                youtube: "https://www.youtube.com/embed/9scu9FjyV1Q",
            },
            {
                youtube: "https://www.youtube.com/embed/yvfDptMhhlw",
            },
            {
                image: "https://github.com/PierreEVEN/GLEngine/raw/master/Showcase/DynamicBoundingBoxes.png?raw=true",
            },
            {
                image: "https://github.com/PierreEVEN/GLEngine/raw/master/Showcase/Dynamic_thumbnails.png?raw=true",
            },
            {
                image: "https://github.com/PierreEVEN/GLEngine/raw/master/Showcase/LargeModelLoading.png?raw=true",
            },
            {
                image: "https://github.com/PierreEVEN/GLEngine/raw/master/Showcase/ProceduralLandscape.png?raw=true",
            },
            {
                image: "https://github.com/PierreEVEN/GLEngine/raw/master/Showcase/ProceduralLandscaleAndFoliage.png?raw=true",
            },
        ],
    },
];

export const games = [
    {
        title: "Scuffly",
        languages: [languages.Csharp, languages.HLSL],
        graphics: apis.Unity,
        libs: [libs.blender, libs.wwise, libs.substancepainter],
        description: "Scuffly is a flight simulator made in solo for my 3rd year 3D game engine course at the University of Strasbourg. This project is a continuation of my previous project : Three Flight Simulator",
        image: "https://user-images.githubusercontent.com/24438631/150693061-23689e9d-7b62-4396-b706-0d510ff6ebde.png",
        link: "https://github.com/PierreEVEN/Scuffly",
        start: "October 2021",
        duration: "2 months",
        features: [
            {
                name: "Aerodynamic simulation",
                description: "Realtime physic simulation based on drag. (The result is not bad at all, but I should have combined it with lift coefficients to have a better behavior in extreme cases)"
            },
            {
                name: "Dynamic flight models",
                description: "The flight model is fully dynamic and customizable. Each physical part of the plane (wings, flaps...) has an independent behavior that make the plane flight when they are combined. The destruction of one of these parts could of course have a more or less important impact on the behaviour of the plane."
            },
            {
                name: "Weapons & dogfight",
                description: "Infra-red missiles with their own physic model and impact prediction system"
            },
            {
                name: "Advanced Audio",
                description: "High fidelity engine audio using WWise audio engine"
            },
            {
                name: "AIs",
                description: "AI controlled planes for PVE dogfights (they are really dangerous)"
            },
            {
                name: "Clickable cockpit",
                description: "Every interaction can be done from the cockpit"
            },
            {
                name: "Procedural GPU Landscape",
                description: "Procedurally generated landscape, with customizable area. The generation is entirely done on the GPU"
            },
            {
                name: "Editor tools",
                description: "In editor development tools that simplify and speeds up artistic tasks. The procedural landscape is compatible with editor viewport and support hot reloads",
            },
            {
                name: "Custom UI tools",
                description: "Easy to use tools that generate dial, scales and much more",
            },
            {
                name: "Advanced rendering",
                description: "Modern graphics using unity's new High Definition Rendering Pipeline"
            },
        ],
        gallery: [
            {
                youtube: "https://www.youtube.com/embed/mo5any4fGz0",
            },
            {
                youtube: "https://www.youtube.com/embed/tEoloqOIR44",
            },
            {
                youtube: "https://www.youtube.com/embed/nXM0JXUwFlM",
            },
            {
                youtube: "https://www.youtube.com/embed/01ZYdLhIbMQ",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/150693050-c1c1ff50-b57b-4e82-bd06-0f5b6e30c1e7.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/150693068-20426e66-281c-4f4a-8f16-20d262c5453c.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/150693077-8f9bfd4d-3a4f-42d7-b599-c2b05de07a19.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/150693094-37805712-6958-484c-84c8-41e5d7ed7c98.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/150693106-8bfea4fe-9458-4c35-ab8a-4935b0b7c076.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/150693116-5f427c0e-ef92-4dc9-bdb3-dbff98bf81b9.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/150693120-ada35852-793a-400d-ba56-a7f5a2814689.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/150693126-1291b311-d0dc-488c-b8bf-8783b6b27335.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/150693127-f57f54d9-4a47-45d4-b245-1788836f4e1c.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/150693144-289e2c3a-cd9c-4d2e-bf8c-f3f35ab840ff.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/150693149-854be278-8db4-42c4-a7c3-c51d4edfd325.png",
            },
        ],
    },

    {
        title: "Randonnée à Dut'",
        languages: [languages.Cpp, languages.Blueprint],
        graphics: apis.UE4,
        libs: [libs.blender, libs.substancepainter, libs.wwise],
        description: "School project in teams of 4 students : serious game that learn the consequences of the development of hiking in Germany at the end of the 18th century.",
        image: "https://git.unistra.fr/la-barre-oblique/randonneeadut/-/raw/master/Documentation/Screen6.png",
        link: "https://git.unistra.fr/la-barre-oblique/randonneeadut",
        start: "October 2021",
        duration: "2 months",
        features: [
            {
                name: "City builder",
                description: "Build shops, sell services to walkers, and grow your village"
            },
            {
                name: "Environment alteration",
                description: "The development of your city will slowly deteriorate the environment, leading to a lack of walkers"
            },
        ],
        gallery: [
            {
                image: "https://git.unistra.fr/la-barre-oblique/randonneeadut/-/raw/master/Documentation/MainMenu.png",
            },
            {
                image: "https://git.unistra.fr/la-barre-oblique/randonneeadut/-/raw/master/Documentation/Screen1.png",
            },
            {
                image: "https://git.unistra.fr/la-barre-oblique/randonneeadut/-/raw/master/Documentation/Screen1.png",
            },
            {
                image: "https://git.unistra.fr/la-barre-oblique/randonneeadut/-/raw/master/Documentation/Screen3.png",
            },
            {
                image: "https://git.unistra.fr/la-barre-oblique/randonneeadut/-/raw/master/Documentation/Screen4.png",
            },
            {
                image: "https://git.unistra.fr/la-barre-oblique/randonneeadut/-/raw/master/Documentation/Screen5.png",
            },
            {
                image: "https://git.unistra.fr/la-barre-oblique/randonneeadut/-/raw/master/Documentation/Screen6.png",
            },
        ],
    },

    {
        title: "Three Flight Simulator",
        languages: [languages.JS, languages.GLSL],
        graphics: apis.OpenGL,
        libs: [libs.threejs, libs.emscripten, libs.blender],
        description: "Solo school project for my graphic programming course at the IUT Robert Shuman. I decided to do some studies about flight simulation. We had to use Three.JS, so I made a flight simulator running on web browser",
        image: "https://user-images.githubusercontent.com/24438631/110435648-8c859c80-80b3-11eb-935e-26e67884091e.png",
        link: "https://github.com/PierreEVEN/ThreeFlightSimulator",
        start: "March 2020",
        duration: "2 months",
        features: [
            {
                name: "Procedural landscape",
                description: "Simple procedural landscape using a quadtree"
            },
            {
                name: "Atmospheric scattering",
                description: "Atmospheric scattering shaders."
            },
            {
                name: "Tree impostors",
                description: "Spherical impostor that fake 3D trees and allow massive cheap forest generation on web browser"
            },
            {
                name: "High performance procedural generation",
                description: "Procedural multi threaded generation on any browser using workers and C++ code",
            },
        ],
        gallery: [
            {
                image: "https://user-images.githubusercontent.com/24438631/110435648-8c859c80-80b3-11eb-935e-26e67884091e.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/110435644-8b546f80-80b3-11eb-95dd-1c5db0257e46.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/110436644-c5724100-80b4-11eb-9b51-f0067786d554.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/150693735-efe73c3d-397a-4479-b0ab-e43f0df9069f.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/150693744-59b0760e-b12d-46cb-a446-142ed685eafe.png",
            }
        ],
    },

    {
        title: "Le postier de Fakarava",
        languages: [languages.Blueprint],
        graphics: apis.UE4,
        libs: [libs.blender, libs.magicavoxel],
        description: "Context : game jam about 'Fakarava' and 'minimalist'. With a friend, we built a tiny casual glider delivery game ",
        image: "https://github.com/PierreEVEN/LePostierDeFakarava/raw/master/Showcase/Map.png?raw=true",
        link: "https://github.com/PierreEVEN/LePostierDeFakarava",
        start: "February 2020",
        duration: "2 days",
        features: [
            {
                name: "Arcade flight model",
                description: "A fun and accessible flight model, but that will require more skills to really improve scores"
            },
            {
                name: "Delivery system",
                description: "Take off with your electric powered glider, avoid the clouds to keep your battery charged, delivery some stuffs, then land in the closest airport"
            },
        ],
        gallery: [
            {
                youtube: "https://www.youtube.com/embed/27ZOmsAE9dw",
            },
            {
                image: "https://github.com/PierreEVEN/LePostierDeFakarava/raw/master/Showcase/End.PNG?raw=true",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/100242407-08a90980-2f35-11eb-833f-31f9dd87b0b8.png",
            },
        ],
    },

    {
        title: "Le postier de Fakarava - 'Chad version'",
        languages: [languages.Blueprint],
        graphics: apis.UE4,
        libs: [libs.blender, libs.magicavoxel],
        description: "After the game jam, I decided to continue the project on my side and try some more advanced experimentation for fun",
        image: "https://user-images.githubusercontent.com/24438631/100242034-a0f2be80-2f34-11eb-97ed-c2bc40bafd93.png",
        link: "https://github.com/PierreEVEN/LePostierDeFakarava",
        start: "February 2020",
        duration: "1 month",
        features: [
            {
                name: "Arcade flight model",
                description: "A fun and accessible flight model, but that will require more skills to really improve scores"
            },
        ],
        gallery: [
            {
                youtube: "https://www.youtube.com/embed/KB5aJOP5bAw",
            },
            {
                youtube: "https://www.youtube.com/embed/RBLLOgNFu6o",
            },
            {
                youtube: "https://www.youtube.com/embed/xz3EQgNm2sE",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/100241731-4f4a3400-2f34-11eb-86ae-b17349975be2.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/100241756-58d39c00-2f34-11eb-94f9-b029070f3e49.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/100241773-5e30e680-2f34-11eb-9a6a-87d0c2e003e2.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/100241859-73a61080-2f34-11eb-930f-f6efcb1686e1.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/100241981-933d3900-2f34-11eb-9319-543a5aa0ac52.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/100242016-9b957400-2f34-11eb-8b08-70fe2457f4cb.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/100242042-a51edc00-2f34-11eb-9ff4-55aae4d2506c.png",
            },
            {
                image: "https://user-images.githubusercontent.com/24438631/100242044-a5b77280-2f34-11eb-85d6-6590860883c1.png",
            },
        ],
    },


    {
        title: "Qanga",
        languages: [languages.Blueprint, languages.Cpp],
        graphics: apis.UE4,
        libs: [libs.blender],
        description: "A massive multiplayer open world by iolaCorp. I worked on gameplay features there between 2017 and 2019",
        image: "https://qanga.iolacorp.com/imagyseycache/original.1920x1080/pages/35/mpc-hc64_ei7dJY3Nq2_60255bceda662.jpg?s=afad2a31a8639ef9da26e406ddd968ca",
        link: "https://qanga.iolacorp.com",
        start: "early 2017",
        duration: "Still in active development, I leaved the project in 2019",
        features: [
            {
                name: "Massively multiplayer",
                description: "Up to 50 simultaneous players in a large open world"
            },
            {
                name: "Multiple gamemodes",
                description: "Sandbox open world & battle royal modes"
            },
            {
                name: "Competitive gameplay",
                description: "Dynamic, challenging, and competitive gameplay. Advanced lag compensation, high performance network and much more."
            },
            {
                name: "Vehicles",
                description: "Hovering vehicles using a custom physics model"
            },
            {
                name: "Sandbox",
                description: "Build your home, fight AI, waves, boss, defend your base"
            },
        ],
    },

];


export const other = [

    {
        title: "Prefab tool",
        languages: [languages.Cpp],
        graphics: apis.UE4,
        description: "Editor tool for the Unreal Engine 4 that add a prefab system optimized for open worlds (made for Qanga). A prefabs is a container of children objects that can be 3D models, lights, other prefabs, or anything else.",
        image: "https://cdn.discordapp.com/attachments/837400074341318656/934886528948244600/unknown.png",
        link: "",
        start: "early 2020",
        duration: "4 months",
        libs: [libs.glfw, libs.stbi, libs.imgui],
        features: [
            {
                name: "Randomization",
                description: "Use multiple preset to randomize generation"
            },
            {
                name: "Performances",
                description: "Culling and async loading to allow a smooth usage in open worlds"
            },
            {
                name: "Custom editor",
                description: "Edit prefabs in a custom dedicated editor window"
            },
        ],
        gallery: [
            {
                youtube: "https://www.youtube.com/embed/H0Um93o3ANU",
            },
            {
                youtube: "https://www.youtube.com/embed/1-_JRkDrqDI",
            },
            {
                image: "https://cdn.discordapp.com/attachments/837400074341318656/934886760402518056/unknown.png",
            },
        ],
    },
    {
        title: "Super packer",
        languages: [languages.Cpp, languages.GLSL],
        graphics: apis.OpenGL,
        description: "Someone needed a tool that allow recombining image channel in few clicks, so I made it",
        image: "https://user-images.githubusercontent.com/24438631/113629508-ca4ff380-9666-11eb-9d17-6a4a56f97d09.png",
        link: "https://github.com/PierreEVEN/SuperPacker",
        start: "2020",
        duration: "one evening",
        libs: [libs.glfw, libs.stbi, libs.imgui],
        gallery: [
            {
                image: "https://github.com/PierreEVEN/SuperPacker/raw/main/icon.png",
            },
        ],
    },
    {
        title: "ILSD",
        languages: [languages.Cpp, languages.GLSL],
        graphics: apis.OpenGL,
        description: "A linear structure extraction research project where I worked on the implementation of the user interface. Initially under QT (whose licence was no longer compatible with the project), I created an UI library on the top of ImGui that reproduce the behaviour of QT's widgets to permit a quick implementation",
        image: "https://github.com/evenp/ILSD/raw/main/Images/ccx02.png?raw=true",
        link: "https://github.com/evenp/ILSD",
        start: "Jun 2020",
        duration: "2 months",
        libs: [libs.glfw, libs.stbi, libs.imgui],
        gallery: [
            {
                image: "https://github.com/evenp/ILSD/raw/main/Images/ccx02.png?raw=true    ",
            },
        ],
    },
]
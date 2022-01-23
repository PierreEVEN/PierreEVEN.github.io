export const projects = [{
    title: "3D Game engine",
    subtitle: "personal 3D game engine i'm working on",
    description: "",
    image: "https://user-images.githubusercontent.com/24438631/136795565-0bfdb609-ef96-44de-9579-f8c0b2a79f83.png",
    link: "GameEngines",
}, {
    title: "Games",
    subtitle: "Game I made in solo, or with peoples",
    description: "",
    image: "https://camo.githubusercontent.com/878a2bc96873e78d2d3c99e7e170c2365ac27d19f413364c107060ab1972cbd9/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f6d6f35616e793466477a302f302e6a7067",
    link: "Games",
}, {
    title: "Miscellaneous",
    subtitle: "Not finished yet",
    description: "",
    image: "https://github.com/evenp/ILSD/raw/main/Images/ccx02.png?raw=true",
    link: "Other",
},];

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
        description: "Scuffly is a flight simulator made in solo for my 3rd year 3D game engine course at the University of Strasbourg. This project is a continuation of my previous project : Three Flight Simulator",
        image: "https://youtu.be/mo5any4fGz0",
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
                image: "https://camo.githubusercontent.com/1983799b926dbbe237a3d33b53205d7b20b0441058e7d8907d52b52192483a6f/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f6e584d304a585577466c4d2f302e6a7067"
            },
            {
              name: "Custom UI tools",
              description:  "Easy to use tools that generate dial, scales and much more",
              image: "https://camo.githubusercontent.com/357819c5b8a520c2d35af66dbf17b8768f1ce48539fa6f4e12be286b77850777/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f30315a59644c6849624d512f302e6a7067",
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
        title: "Le postier de Fakarava - Chad version",
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

];
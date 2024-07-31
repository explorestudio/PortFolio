const projects = {
    'project-1': {
        title: 'Heavy Metal - The Hunt <span class="text-gray-500 italic font-bold">(2023)</span><br><span class="inline-block bg-blue-500 text-white text-sm px-2 py-1 rounded-full mt-2">Gameplay Designer</span>',
        description: `
            <p class="mb-4 mt-2">HV-MTL - The Hunt is a roguelite game made by <span class="font-bold">Yuga labs</span> and developed by <span class="font-bold">MakeMePulse</span> </p>
            <p class="mb-4 mt-2">I created and documented the game mechanics for the technical and design teams and contributed to implementing the game logic in collaboration with the client.</p>
            <span class="font-bold">Task overview</span>
            <ul class="list-disc pl-5 mb-4">
                <li>Worked with <span class="font-bold">Figma </span>, creating <span class="font-bold">UI wireframes </span>and diagram the game design </span></li>
                <li>Updating and managing game documentation with <span class="font-bold"> Jira </span> and <span class="font-bold">Confluence </span></li>
            </ul>
        `,
        featuredImage: 'https://www.youtube.com/embed/M7-Y4Lm8EAI?autoplay=1&mute=1&loop=1&modestbranding=1&rel=0&controls=0&playlist=M7-Y4Lm8EAI&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0',
        link: 'https://hv-mtl.com/'
    },
    'project-2': {
        title: 'The Infernity <span class="text-gray-500 italic font-bold">(2022 - 2023)</span><br><span class="inline-block bg-red-500 text-white text-sm px-2 py-1 rounded-full mt-2">Game Economy Designer</span>  <span class="inline-block bg-blue-500 text-white text-sm px-2 py-1 rounded-full mt-2">Gameplay Designer</span>',
        description: 'This is a brief description of Project Two. It highlights the key functionalities and tools utilized.',
        featuredImage: 'https://www.youtube.com/embed/6s_a8YN04Qc?autoplay=1&mute=1&controls=0&loop=1&playlist=6s_a8YN04Qc&modestbranding=1&showinfo=0&rel=0',
        link: 'https://theinfernity.com/game'
    },
    'project-3': {
        title: 'Time Breachers <span class="text-gray-500 italic font-bold">(2021 - 2022)</span><br><span class="inline-block bg-red-500 text-white text-sm px-2 py-1 rounded-full mt-2">Game Economy Designer</span>',
        description: 'This is a brief description of Project Three. It includes a summary of the project\'s scope and outcomes.',
        featuredImage: 'https://www.youtube.com/embed/jT_V_R_shHg?autoplay=1&mute=1&controls=0&loop=1&playlist=jT_V_R_shHg&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0',
        link: 'https://play.google.com/store/apps/details?id=com.StarChainGazer.TimeBreachers&hl=en_US'
    }
    // Add more projects as needed
};

let currentProjectIndex = 0;
const projectKeys = Object.keys(projects);

// Function to get URL parameter by name
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to show a project based on the ID
function showProject(projectId) {
    const project = projects[projectId];
    if (project) {
        document.getElementById('featured-title').innerHTML = project.title;
        document.getElementById('featured-description').innerHTML = project.description;

        const featuredProject = document.getElementById('featured-project');
        const existingMediaContainer = featuredProject.querySelector('.featured-media');
        if (existingMediaContainer) {
            existingMediaContainer.remove();
        }

        const newMediaContainer = document.createElement('div');
        newMediaContainer.classList.add('featured-media');

        const iframe = document.createElement('iframe');
        iframe.src = project.featuredImage;
        iframe.frameBorder = 0;
        iframe.allow = 'autoplay; encrypted-media';
        iframe.allowFullscreen = true;
        newMediaContainer.appendChild(iframe);

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        newMediaContainer.appendChild(overlay);

        featuredProject.insertBefore(newMediaContainer, document.querySelector('.featured-description'));
        document.getElementById('featured-link').href = project.link;
    }
}

// Get the project ID from the URL and show the project
const projectId = getQueryParam('project');
if (projectId) {
    showProject(projectId);
}

function previousProject() {
    currentProjectIndex = (currentProjectIndex > 0) ? currentProjectIndex - 1 : projectKeys.length - 1;
    showProject(projectKeys[currentProjectIndex]);
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex < projectKeys.length - 1) ? currentProjectIndex + 1 : 0;
    showProject(projectKeys[currentProjectIndex]);
}

// Initial display of the first project if no project is specified in the URL
if (!projectId) {
    showProject(projectKeys[currentProjectIndex]);
}
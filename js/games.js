const projects = {
    
    'project-1': {
        title: 'The Infernity',
        description: 'This is a brief description of Project One. It showcases the main features and technologies used. This is a brief description of Project One. It showcases the main features and technologies used.This is a brief description of Project One. It showcases the main features and technologies used.',
        featuredImage: 'https://www.youtube.com/embed/6s_a8YN04Qc?autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&rel=0&playlist=6s_a8YN04Qc&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0',
        link: 'https://theinfernity.com/game'
    },
    'project-2': {
        title: 'Heavy Metal - The Hunt',
        description: 'This is a brief description of Project Two. It highlights the key functionalities and tools utilized.',
        featuredImage: 'https://www.youtube.com/embed/M7-Y4Lm8EAI?autoplay=1&mute=1&loop=1&modestbranding=1&rel=0&controls=0&playlist=M7-Y4Lm8EAI&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0',
        link: 'https://hv-mtl.com/'
    },
    'project-3': {
        title: 'Time breachers',
        description: 'This is a brief description of Project Three. It includes a summary of the project\'s scope and outcomes.',
        featuredImage: 'https://www.youtube.com/embed/jT_V_R_shHg?autoplay=1&mute=1&controls=0&loop=1&playlist=jT_V_R_shHg&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0',
        link: 'https://play.google.com/store/apps/details?id=com.StarChainGazer.TimeBreachers&hl=en_US'
    }
    // Add more projects as needed
};

let currentProjectIndex = 0;
const projectKeys = Object.keys(projects);

function showProject(projectId) {
    const project = projects[projectId];
    document.getElementById('featured-title').innerText = project.title;
    document.getElementById('featured-description').innerText = project.description;

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

function previousProject() {
    currentProjectIndex = (currentProjectIndex > 0) ? currentProjectIndex - 1 : projectKeys.length - 1;
    showProject(projectKeys[currentProjectIndex]);
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex < projectKeys.length - 1) ? currentProjectIndex + 1 : 0;
    showProject(projectKeys[currentProjectIndex]);
}

// Initial display of the first project
showProject(projectKeys[currentProjectIndex]);


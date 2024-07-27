const projects = {
    'project-1': {
        title: 'Project One',
        description: 'This is a brief description of Project One. It showcases the main features and technologies used.',
        featuredImage: 'https://www.youtube.com/watch?v=6s_a8YN04Qc',
        iconImage: 'https://via.placeholder.com/100',
        link: 'projects/clicker.html'
    },
    'project-2': {
        title: 'Project Two',
        description: 'This is a brief description of Project Two. It highlights the key functionalities and tools utilized.',
        featuredImage: 'https://www.youtube.com/embed/M7-Y4Lm8EAI?autoplay=1&mute=1&loop=1&playlist=M7-Y4Lm8EAI',
        iconImage: 'https://via.placeholder.com/100',
        link: 'https://link-to-project-two.com'
    },
    'project-3': {
        title: 'Project Three',
        description: 'This is a brief description of Project Three. It includes a summary of the project\'s scope and outcomes.',
        featuredImage: 'https://via.placeholder.com/600x400',
        iconImage: 'https://via.placeholder.com/100',
        link: 'https://link-to-project-three.com'
    }
    // Add more projects as needed
};

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

    if (projectId === 'project-1' || projectId === 'project-2') {
        const iframe = document.createElement('iframe');
        iframe.src = project.featuredImage;
        iframe.frameBorder = 0;
        iframe.allow = 'autoplay; encrypted-media';
        iframe.allowFullscreen = true;
        newMediaContainer.appendChild(iframe);
    } else {
        const img = document.createElement('img');
        img.src = project.featuredImage;
        img.alt = project.title;
        newMediaContainer.appendChild(img);
    }

    featuredProject.insertBefore(newMediaContainer, document.querySelector('.featured-description'));
    document.getElementById('featured-link').href = project.link;
}

// Initial display of the first project
showProject('project-1');


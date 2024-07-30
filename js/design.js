const schemes = {
    'scheme-1': {
        title: 'Balancing a clicker game : Prototype',
        description: `
            <p class="mb-4">This project stands out as a prototype for a Web3 clicker game. Using Machinations, I am able to simulate various game features, such as manual and autoclicking:</p>
            <ul class="list-disc pl-5 mb-4">
                <li>Clicking on the <span class="text-green-500">green triangle</span> creates a resource</li>
                <li>Clicking on the <span class="text-yellow-500">orange triangle</span> lets you create a resource generator</li>
            </ul>
            <p class="mb-4">Clicking on the green triangle creates a resource while clicking on the orange triangle lets you create a resource generator.</p>
        `,
        featuredImage: 'https://my.machinations.io/d/clicker-v4/910429c003f011ee915c02f943517e50',
    },
    'scheme-2': {
        title: 'Scheme 2',
        description: 'A detailed economic model for Project Two, depicting the monetization strategies and player spending behaviors.',
        featuredImage: 'https://pbs.twimg.com/profile_images/1589715753942540293/jrcOcqHT_400x400.jpg',
    },
    'scheme-3': {
        title: 'Scheme 3',
        description: 'A comprehensive economic plan for Project Three, highlighting the revenue streams and cost structures.',
        featuredImage: 'https://example.com/scheme-3',
    }
    // Add more schemes as needed
};

let currentSchemeIndex = 0;
const schemeKeys = Object.keys(schemes);

function showScheme(schemeId) {
    const scheme = schemes[schemeId];
    console.log(scheme);
    document.getElementById('scheme-title').innerText = scheme.title;
    document.getElementById('scheme-description').innerHTML = scheme.description;

    const featuredScheme = document.getElementById('featured-scheme');
    const existingMediaContainer = featuredScheme.querySelector('.scheme-media');
    if (existingMediaContainer) {
        existingMediaContainer.remove();
    }

    const newMediaContainer = document.createElement('div');
    newMediaContainer.classList.add('scheme-media');

    const iframe = document.createElement('iframe');
    iframe.src = scheme.featuredImage;
    iframe.frameBorder = 0;
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    newMediaContainer.appendChild(iframe);

    featuredScheme.insertBefore(newMediaContainer, document.querySelector('.featured-description'));
    // document.getElementById('featured-link').href = scheme.link;
}

function previousScheme() {
    currentSchemeIndex = (currentSchemeIndex > 0) ? currentSchemeIndex - 1 : schemeKeys.length - 1;
    showScheme(schemeKeys[currentSchemeIndex]);
}

function nextScheme() {
    currentSchemeIndex = (currentSchemeIndex < schemeKeys.length - 1) ? currentSchemeIndex + 1 : 0;
    showScheme(schemeKeys[currentSchemeIndex]);
}

// Initial display of the first project
showScheme(schemeKeys[currentSchemeIndex]);
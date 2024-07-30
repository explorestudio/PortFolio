const schemes = {
    
    'scheme-1': {
        title: 'Pipi',
        description: 'PIPIPIPI An illustration of the in-game economy for Project One, showcasing the flow of resources, currency, and player interactions.',
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
    console.log('plop');
    document.getElementById('scheme-title').innerText = scheme.title;
    document.getElementById('scheme-description').innerText = scheme.description;

    const featuredScheme = document.getElementById('featured-scheme');
    const existingMediaContainer = featuredScheme.querySelector('.featured-media');
    if (existingMediaContainer) {
        existingMediaContainer.remove();
    }

    const newMediaContainer = document.createElement('div');
    newMediaContainer.classList.add('featured-media');

    const iframe = document.createElement('iframe');
    iframe.src = scheme.featuredImage;
    iframe.frameBorder = 0;
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    newMediaContainer.appendChild(iframe);

    featuredScheme.insertBefore(newMediaContainer, document.querySelector('.featured-description'));
    document.getElementById('featured-link').href = scheme.link;
}

function previousScheme() {
    currentSchemeIndex = (currentSchemeIndex > 0) ? currentSchemeIndex - 1 : schemeKeys.length - 1;
    showScheme(schemeKeys[currentSchemeIndex]);
}

function nextScheme() {
    currentSchemeIndex = (currentSchemeIndex < schemeKeys.length - 1) ? currentSchemeIndex + 1 : 0;
    showScheme(schemeKeys[currentSchemeIndex]);
}

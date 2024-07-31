const schemes = {
    'scheme-1': {
        title: 'Balancing a clicker game : Prototype',
        description: `
            <p class="mb-4">
            This project stands out as a prototype for a Web3 clicker game. Using <span class="font-bold">Machinations</span>, I am able to simulate various game features such as manual and autoclicking:
            </p>
            <p class="mb-4">
                <span class="font-bold">To start, click on the button play </span>
                <img src="https://cdn.imgbin.com/1/0/23/imgbin-line-triangle-brand-other-sony-vegas-icon-55xdYWkE4x1Y3ZdgmmQy4MEFC.jpg" alt="Play Button Logo" class="inline-block w-4 h-4">
                <span class="font-bold"></span>
            </p>
            <ul class="list-disc pl-5 mb-4">
                <li>Clicking on the <span class="text-green-500 font-bold">green triangle</span> creates a resource</li>
                <li>Clicking on the <span class="text-yellow-500 font-bold">orange triangle</span> creates a resource generator</li>
            </ul>
            <p class="mb-4">
                Feel free to look into it directly <a href="https://my.machinations.io/d/clicker-v4/910429c003f011ee915c02f943517e50" class="text-blue-500 font-bold underline hover:text-blue-700">here</a> 
                so you can get see the rest of the game!
            </p>

        `,
        featuredImage: 'https://my.machinations.io/d/clicker-v4/910429c003f011ee915c02f943517e50',
    },
    'scheme-2': {
        title: 'Economic Game design: Web3 approach',
        description:  `
            <p class="mb-4">This project stands out as a prototype for a Web3 clicker game. Using Machinations, I am able to simulate various game features, such as manual and autoclicking:</p>
            <ul class="list-disc pl-5 mb-4">
            <p class= mb-4> Click on the "play" button to start !
                <li>Clicking on the <span class="text-green-500">green triangle</span> creates a resource</li>
                <li>Clicking on the <span class="text-yellow-500">orange triangle</span> lets you create a resource generator</li>
            </ul>
            <p class="mb-4">Feel free to look into it directly <a href="https://my.machinations.io/d/clicker-v4/910429c003f011ee915c02f943517e50" class="text-blue-500 underline hover:text-blue-700">here</a> 
            so you can get see the rest of the game !</p>
    `,
        featuredImage: 'https://docs.google.com/presentation/d/e/2PACX-1vRaSd5QmInQi7p8LRfcSb3qMmeIDMx0VNy0OFoP1GG849csJ6RPo82TXjOQ_tlPpRQgyblQCpQEET5I/embed?start=false&loop=true&delayms=500',
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
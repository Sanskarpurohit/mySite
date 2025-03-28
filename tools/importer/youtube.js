function replaceVideoOpenerWithTable(document) {
    const videoOpeners = document.querySelectorAll('.video-opener');
    if (videoOpeners.length === 0) {
        throw new Error('No elements with the class .video-opener found.');
    }
    videoOpeners.forEach((videoOpener) => {
        const button = videoOpener.querySelector('button[data-video-url]');
        const videoUrl = button.getAttribute('data-video-url');
        const img = videoOpener.querySelector('img');
        const cells = [
            ['video-embed(video-embed-youtube)'],
            [],
        ];
        if (img) {
            const imgElement = `<img src="${img.src}" alt="${img.alt}">`;
            cells[1].push(`${imgElement} ${videoUrl}`);
        } else {
            cells[1].push(videoUrl);
        }
        const table = WebImporter.DOMUtils.createTable(cells, document);
        const hrBefore = document.createElement('hr');
        const hrAfter = document.createElement('hr');

        button.replaceWith(hrBefore, table, hrAfter);

        // videoOpener.replaceChild(table, button);
    });
}

export default {
    transformDOM: ({ document }) => {
        const main = document.querySelector('main');
        replaceVideoOpenerWithTable(document);

        WebImporter.DOMUtils.remove(main, [
            '.header',
            '.footer',
            // '.container-fluid .mag-closing .hidden-print .mag-closing-blue', // Related Articles
            '.social-links',
            '.modal-content',
            '.embed-responsive .embed-responsive-16by9',
            '.sr-only',
            '.magnav',
            '.mag-closing-blue',
            '.magsubnav',
            '.title',
            '.hidden-lg',
        ]);

        return main;
    },
};
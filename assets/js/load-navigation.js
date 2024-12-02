document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('nav ul li a');

    // Function to load an HTML section dynamically
    const loadSection = async (sectionId) => {
        try {
            const response = await fetch(`sections/${sectionId}.html`);
            if (!response.ok) throw new Error('Failed to load section');
            const html = await response.text();
            content.innerHTML = html;
        } catch (error) {
            console.error(error);
            content.innerHTML = '<p>Error loading content. Please try again later.</p>';
        }
    };

    // Attach event listeners to navigation links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            loadSection(sectionId);
        });
    });

    // Load the default section (home) on page load
    loadSection('home');
});
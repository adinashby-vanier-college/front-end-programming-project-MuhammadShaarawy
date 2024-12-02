document.addEventListener('DOMContentLoaded', () => {
    // Map of container IDs and corresponding section files
    const sections = {
        header: 'sections/home.html',    // Load the "home.html" into header
        navigation: 'sections/navigation.html',    // Load the "about.html" into main
        footer: 'sections/contact.html' // Load the "contact.html" into footer
    };

    // Function to load a section
    const loadSection = async (containerId, filePath) => {
        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error(`Failed to load ${filePath}`);
            const content = await response.text();
            document.getElementById(containerId).innerHTML = content;
        } catch (error) {
            console.error(error);
        }
    };

    // Loop through sections and load each one
    for (const [id, file] of Object.entries(sections)) {
        loadSection(id, file);
    }
});
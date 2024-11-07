// Cybersecurity Job Levels
const titleOfPage = "Cyber Security Jobs";

// Experience level with associated job titles and openings
const careers = {
    'Cybersecurity Analyst': 32000,
    'Threat Intelligence Analyst': 15000,
    'Cloud Security Engineer': 25000,
    'Incident Response Manager': 18000,
    'Governance & Compliance Specialist': 10000,
    'Security Architect': 8000,
};

let infoBox; // Define infoBox globally

// Function to display each role and its number of openings
function showRoles() {
    if (!infoBox) { // Check if infoBox does not already exist
        infoBox = document.createElement('div');
        infoBox.id = 'infoBox'; // Assign an ID 
        infoBox.innerHTML = `
            <h3>${titleOfPage}</h3>
            <ul>
                ${Object.entries(careers).map(([role, openings]) =>
                    `<li>${role}: ${openings} openings</li>`
                ).join('')}
            </ul>
        `;
        document.body.appendChild(infoBox);
        roleButton.textContent = 'Hide Roles';
    }
}

function hideRoles() {
    if (infoBox) { // Check if infoBox exists
        infoBox.remove();
        infoBox = null; // Reset infoBox reference
        roleButton.textContent = 'Show Open Cybersecurity Roles';
    }
}

// Toggle function to show or hide roles
function toggleRoles() {
    if (infoBox) {
        hideRoles();
    } else {
        showRoles();
    }
}

const roleButton = document.getElementById('roleButton');
roleButton.addEventListener('click', toggleRoles);

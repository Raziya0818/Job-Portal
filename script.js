// Sample job data
const jobs = [
    { title: 'Frontend Developer', company: 'Tech Corp', location: 'New York, NY', description: 'Develop and maintain web applications.' },
    { title: 'Backend Developer', company: 'Codebase', location: 'San Francisco, CA', description: 'Work on server-side logic and database management.' },
    { title: 'Full Stack Developer', company: 'Web Solutions', location: 'Remote', description: 'Develop and manage both frontend and backend of web applications.' },
    { title: 'UI/UX Designer', company: 'Creative Studio', location: 'Los Angeles, CA', description: 'Design user interfaces and user experiences for websites and apps.' },
    { title: 'Software Developer', company: 'Capgamini', location: 'Banglore', description: 'Develop and maintain  applications.' },

];

// Cache DOM elements
const mainContent = document.getElementById('main-content');
const searchBar = document.createElement('input');
searchBar.type = 'text';
searchBar.id = 'search-bar';
searchBar.placeholder = 'Search for jobs...';

// Function to create a job card
function createJobCard(job) {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';

    jobCard.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p>${job.description}</p>
        <button class="apply-btn">Apply</button>
    `;

    // Add event listener to the Apply button
    jobCard.querySelector('.apply-btn').addEventListener('click', () => applyForJob(job));

    return jobCard;
}

// Function to display jobs
function displayJobs(jobList) {
    const jobListings = document.createElement('div');
    jobListings.className = 'job-listings';
    const fragment = document.createDocumentFragment();

    jobList.forEach(job => {
        fragment.appendChild(createJobCard(job));
    });

    jobListings.appendChild(fragment);
    mainContent.innerHTML = ''; // Clear existing content
    mainContent.appendChild(searchBar); // Add the search bar
    mainContent.appendChild(jobListings); // Add the job listings
}

// Function to handle job application
function applyForJob(job) {
    alert(`You have applied for the ${job.title} position at ${job.company}!`);
    // Additional logic for applying to the job can be added here
}

// Function to search jobs
function searchJobs() {
    const query = searchBar.value.toLowerCase();
    const filteredJobs = jobs.filter(({ title, company, location }) => 
        title.toLowerCase().includes(query) ||
        company.toLowerCase().includes(query) ||
        location.toLowerCase().includes(query)
    );

    displayJobs(filteredJobs);
}

// Event listener for search bar
searchBar.addEventListener('input', searchJobs);

// Functions for different sections
function showHome() {
    mainContent.innerHTML = `<h1>Welcome to job portal</h1><p>Your one-stop solution for finding and posting jobs.</p>`;
}

function showJobs() {
    displayJobs(jobs); // Show all jobs
}

function showPostJob() {
    mainContent.innerHTML = `<h1>Post a Job</h1><p>Feature coming soon...</p>`;
}

function showContact() {
    mainContent.innerHTML = `<h1>Contact Us</h1><p>For inquiries to contact company website</p>`;
}

// Function to handle navigation
function handleNavigation(event) {
    const section = event.target.getAttribute('data-section');
    switch (section) {
        case 'home':
            showHome();
            break;
        case 'jobs':
            showJobs();
            break;
        case 'post-job':
            showPostJob();
            break;
        case 'contact':
            showContact();
            break;
        default:
            showHome();
            break;
    }
}

// Add event listeners to navbar links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', handleNavigation);
});

// Initial display of the Home section on page load
showHome();

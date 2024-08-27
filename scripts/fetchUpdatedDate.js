async function fetchUpdatedDate() {
    const repoOwner = 'apspace';
    const repoName = 'antonpopov.me';

    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const repoData = await response.json();
        const lastUpdatedDate = new Date(repoData.pushed_at);
        
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = lastUpdatedDate.toLocaleDateString('en-GB', options);

        document.getElementById('updated').textContent = `updated: ${formattedDate}`;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchUpdatedDate();
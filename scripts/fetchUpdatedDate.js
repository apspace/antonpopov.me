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
        
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = lastUpdatedDate.toLocaleDateString('en-GB', options).toLowerCase();
        
        // const day = String(lastUpdatedDate.getDate()).padStart(2, '0');
        // const month = String(lastUpdatedDate.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0
        // const year = lastUpdatedDate.getFullYear();
        // const formattedDate = `${day}.${month}.${year}`;

        document.getElementById('updated').textContent = `updated: ${formattedDate}`;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchUpdatedDate();
// Define the base URL and path parameters
const baseUrl = 'https://api.modrinth.com/v2';
const endpoint = '/project';
const itemId = '/ywmtd0Ph';

url = `${baseUrl}${endpoint}${itemId}`;
fetch(url, {
    method: 'GET', // Specify the request method
    headers: {
           'Content-Type': 'application/json', // Set the request headers if needed
           'User-Agent': 'AdyTech99.dev/1.0 (contact@adytech99.dev)', // Custom User-Agent header
           'Authorization': 'mrp_qKxtONxGosLtjLz2yjDVnSHO5RVkcURvGwFpXzIuatnY1YFpfw8zSkNVsXe6' //token
         }
}).then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
    }).then(data => {
        // Access the downloads property
        numberOfDownloads = data.downloads;
        // Update the HTML element with the number of downloads
        let combine = itemId + '_downloads';
        document.getElementById(combine).textContent = numberOfDownloads;
    }).catch(error => {
        console.error('Error:', error); // Handle any errors

        // Update the HTML element with an error message
        let combine = itemId + '_downloads';
        document.getElementById(combine).textContent = error;
    });
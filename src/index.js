// Fetching data from an API and mapping through the results

async function fetchAndMapPosts() {
  try {
    // Fetch data from the API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    // Convert the response to JSON
    const posts = await response.json();

    // Map through the results and extract titles
    const postTitles = posts.map(post => post.title);
    console.log('Post Titles:', postTitles);  // Log the transformed array (titles)

    // Example: You can also transform the data further (e.g., create a list of objects)
    const postDetails = posts.map(post => {
      return {
        id: post.id,
        title: post.title,
        body: post.body.substring(0, 50)  // Get the first 50 characters of the body
      };
    });

    console.log('Post Details (ID, Title, Body):', postDetails);

  } catch (error) {
    console.error('Error occurred:', error);
  }
}

// Call the function to fetch and map posts
fetchAndMapPosts();

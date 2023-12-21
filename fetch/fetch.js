async function fetchWebsiteContent() {
    try {
      // Replace 'https://example.com' with the URL of the website you want to fetch
      const response = await fetch('https://www.w3schools.com/cssref/css3_pr_animation-keyframes.php');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.text();
      console.log('Website content:', data);
    } catch (error) {
      console.error('There was a problem fetching the website:', error);
    } finally {
      setTimeout(fetchWebsiteContent, 5000); // Fetch again after 5 seconds
    }
  }
  
  // Initial call to start fetching
  fetchWebsiteContent();
  
// Save Bookmark function
function saveBookmark() {
    const siteName = document.getElementById('siteName').value;
    let siteURL = document.getElementById('siteURL').value;
  
    if (!siteName || !siteURL) {
      alert('Please fill in both fields!');
      return;
    }
  
    if (!siteURL.startsWith('http://') && !siteURL.startsWith('https://')) {
      siteURL = 'http://' + siteURL;
    }
  
    const bookmark = {
      name: siteName,
      url: siteURL
    };
  
    // Check if bookmarks array exists in localStorage
    let bookmarks = [];
    if (localStorage.getItem('bookmarks') !== null) {
      bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    }
  
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  
    // Clear form fields
    document.getElementById('siteName').value = '';
    document.getElementById('siteURL').value = '';
  
    fetchBookmarks();
  }
  
  // Fetch bookmarks from localStorage and display
  function fetchBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  
    const bookmarkList = document.getElementById('bookmarkList');
    bookmarkList.innerHTML = '';
  
    if (bookmarks !== null) {
      bookmarks.forEach(function(bookmark) {
        const { name, url } = bookmark;
        const li = document.createElement('li');
        li.innerHTML = `<a href="${url}" target="_blank">${name}</a>`;
        bookmarkList.appendChild(li);
      });
    }
  }
  
  // Initial fetch when the page loads
  document.addEventListener('DOMContentLoaded', fetchBookmarks);
  
// Fetch the news data from the JSON file
fetch('newsData.json')
  .then(response => response.json())
  .then(newsData => {
    let filteredNews = newsData; // Initially, set the filtered news to all news items

    // Function to populate the news list
    function populateNews() {
      const newsList = document.getElementById('newsList');
      newsList.innerHTML = ''; // Clear existing news

      filteredNews.forEach(newsItem => {
        // Create a new news item element
        const item = document.createElement('div');
        item.className = 'news-item';

        // Add title
        const title = document.createElement('h2');
        title.innerHTML = newsItem.title;
        item.appendChild(title);

        // Add summary
        const summary = document.createElement('p');
        summary.innerHTML = newsItem.summary;
        item.appendChild(summary);

        // Add link
        const link = document.createElement('a');
        link.href = newsItem.link;
        link.innerHTML = 'Read more';
        item.appendChild(link);

        // Add date
        const date = document.createElement('p');
        date.innerHTML = 'Date: ' + newsItem.date;
        item.appendChild(date);

        newsList.appendChild(item);
      });
    }

    // Function to filter news by date
    function filterNews() {
      const dateFilter = document.getElementById('dateFilter').value;

      if (dateFilter) {
        filteredNews = newsData.filter(newsItem => newsItem.date === dateFilter);
      } else {
        filteredNews = newsData; // No filter, show all news items
      }

      populateNews();
    }

    // Attach the filterNews function to the button click event
    document.getElementById('filterButton').addEventListener('click', filterNews);

    // Initial population of the news list
    populateNews();
  })
  .catch(error => {
    console.log('An error occurred while fetching the news data:', error);
  });

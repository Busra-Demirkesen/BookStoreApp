document.addEventListener("DOMContentLoaded", function () {
    loadAudiobooks(
      "https://librivox.org/api/feed/audiobooks/?sort=popular&limit=10&format=json",
      "popular-audiobooks"
    );
  });
  
  function loadAudiobooks(apiUrl, containerId) {
    const proxyUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent(apiUrl);
  
    fetch(proxyUrl)
      .then(response => response.json())
      .then(data => {
        let parsed;
        try {
          parsed = JSON.parse(data.contents);
        } catch (e) {
          console.error("JSON ayrıştırma hatası:", e);
          return;
        }
  
        const container = document.getElementById(containerId);
        container.innerHTML = "";
  
        parsed.books.forEach(book => {
          const authors = book.authors?.map(a => `${a.first_name} ${a.last_name}`).join(", ") || "Bilinmiyor";
  
          fetchBookDetails(book.title).then(({ coverUrl, rating }) => {
            const starsHtml = generateStarsHtml(rating);
  
            const card = document.createElement("div");
            card.className = "book-card";
  
            card.innerHTML = `
              <img src="${coverUrl}" alt="${book.title}" class="cover-img">
              <h3>${book.title}</h3>
              <p><strong>Yazar:</strong> ${authors}</p>
              <div class="card-footer">
                <div class="rating">${starsHtml}</div>
                <a href="${book.url_librivox}" target="_blank" class="listen-link">
                  <i class="fa-solid fa-headphones"></i>
                </a>
              </div>
            `;
  
            container.appendChild(card);
          });
        });
      })
      .catch(err => {
        console.error(`"${containerId}" containerına veri alınamadı:`, err);
      });
  }
  
  function fetchBookDetails(title) {
    const query = encodeURIComponent(title);
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}`;
  
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        const item = data.items?.[0]?.volumeInfo;
        const image = item?.imageLinks?.thumbnail || "https://via.placeholder.com/128x195?text=No+Cover";
        const rating = item?.averageRating || null;
        return {
          coverUrl: image,
          rating: rating,
        };
      })
      .catch(() => ({
        coverUrl: "https://via.placeholder.com/128x195?text=No+Cover",
        rating: null,
      }));
  }
  
  function generateStarsHtml(rating) {
    if (!rating) rating = 3;
  
    let starsHtml = "";
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
  
    for (let i = 0; i < fullStars; i++) {
      starsHtml += `<i class="fa-solid fa-star"></i>`;
    }
    if (halfStar) {
      starsHtml += `<i class="fa-solid fa-star-half-stroke"></i>`;
    }
  
    const totalStars = fullStars + (halfStar ? 1 : 0);
    for (let i = totalStars; i < 5; i++) {
      starsHtml += `<i class="fa-regular fa-star"></i>`;
    }
  
    return starsHtml;
  }
  
const params = new URLSearchParams(window.location.search);
const query = params.get("query");
const container = document.getElementById("book-list");

if (query) {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=10&key=AIzaSyAsI9oefJYuV8SlCyecBCBAT67nwz4qcFE`)
    .then(res => {
      if (!res.ok) throw new Error("API bağlantısı başarısız");
      return res.json();
    })
    .then(data => {
      container.innerHTML = "";

      if (!data.items || data.items.length === 0) {
        container.innerHTML = "<p>Kitap bulunamadı.</p>";
        return;
      }

      data.items.forEach(book => {
        const info = book.volumeInfo;
        const image = info.imageLinks?.thumbnail || info.imageLinks?.smallThumbnail || "https://via.placeholder.com/128x200?text=No+Image";

        const title = info.title || "Başlık yok";
        const authors = info.authors?.join(", ") || "Yazar bilgisi yok";
        const preview = info.previewLink || "#";

     
        const rating = info.averageRating || 0;
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

        container.innerHTML += `
          <div class="product-card">
            <div class="img-container">
              <img src="${image}" alt="${title}" />
            </div>
            <div class="text-container">
              <h1>${title}</h1>
              <h3>${authors}</h3>
              <div class="ratings">${starsHtml}</div>
              
            </div>
          </div>
        `;
      });
    })
    .catch(err => {
      console.error("API Hatası:", err);
      container.innerHTML = "<p>API'den veri alınamadı. Lütfen daha sonra tekrar deneyin.</p>";
    });
}

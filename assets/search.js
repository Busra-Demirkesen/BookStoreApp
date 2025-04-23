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
        const image = info.imageLinks?.thumbnail || "https://via.placeholder.com/128x200?text=No+Image";
        const title = info.title || "Başlık yok";
        const authors = info.authors?.join(", ") || "Yazar bilgisi yok";
        const preview = info.previewLink || "#";

        container.innerHTML += `
          <div class="product-card">
            <div class="img-container">
              <img src="${image}" alt="${title}" />
            </div>
            <div class="text-container">
              <h1>${title}</h1>
              <h3>${authors}</h3>
              <div class="col">
                <div class="ratings">
                  <p><i class="fa-solid fa-star"></i>4.5</p>
                </div>
                <div class="read-listen-button-container">
                  <a class="read-btn" href="${preview}" target="_blank">
                    <i class="fa-solid fa-glasses"></i>
                  </a>
                </div>
              </div>
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

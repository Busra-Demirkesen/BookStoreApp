const categories = [
  { title: "Klasikler", query: "classics" },
  { title: "Polisiye", query: "crime" },
  { title: "Bilim Kurgu & Fantastik", query: "science fiction fantasy" },
  { title: "Kişisel Gelişim", query: "self help" },
  { title: "İş Kitapları", query: "business" }
];

const container = document.getElementById("category-sections");

categories.forEach(cat => {
  const section = document.createElement("div");
  section.className = "category-section";

  section.innerHTML = `
    <h2 class="category-title">${cat.title}</h2>
    <hr class="category-divider" />
    <div class="book-row" id="row-${cat.query.replace(/\s/g, '-')}"></div>
  `;

  container.appendChild(section);

  fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(cat.query)}&maxResults=5`)
    .then(res => res.json())
    .then(data => {
      const row = document.getElementById(`row-${cat.query.replace(/\s/g, '-')}`);
      row.innerHTML = "";

      data.items?.forEach(book => {
        const image = book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/120x180?text=No+Image";

        row.innerHTML += `
          <div class="book-cover">
            <img src="${image}" alt="book cover" />
          </div>
        `;
      });
    })
    .catch(err => console.error("API hatası:", err));
});

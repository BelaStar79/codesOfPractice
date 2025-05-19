import { list_games } from "./data_games.js";

const gamesContainer = document.getElementById("gamesbox");
const noResultsMessage = document.getElementById("no-results");
const searchInput = document.getElementById("search-input");
const genreFilter = document.getElementById("genre-filter");
const languageFilter = document.getElementById("language-filter");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const popupTitle = document.getElementById("popup-title");
const popupGenre = document.getElementById("popup-genre");
const popupFormat = document.getElementById("popup-format");
const popupWeight = document.getElementById("popup-weight");
const popupLanguage = document.getElementById("popup-language");
const popupDescription = document.getElementById("popup-description");
const closeBtn = document.getElementById("close-btn");

const renderGames = () => {
  const filterText = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value;
  const selectedLanguage = languageFilter.value;
  gamesContainer.innerHTML = "";
  noResultsMessage.style.display = "none";

  const filteredGames = Object.entries(list_games).filter(([key, game]) => {
    const matchesSearch = game.name.toLowerCase().includes(filterText);
    const matchesGenre = selectedGenre
      ? game.genre.includes(selectedGenre)
      : true;
    const matchesLanguage = selectedLanguage
      ? game.language.includes(selectedLanguage)
      : true;
    return matchesSearch && matchesGenre && matchesLanguage;
  });

  if (filteredGames.length === 0) {
    noResultsMessage.style.display = "block";
  } else {
    filteredGames.forEach(([key, game]) => {
      const box = document.createElement("div");
      box.className = "box";

      const img = document.createElement("img");
      img.src = `./image/${key}.png`;
      img.alt = game.name;

      img.onclick = () => {
        popupImage.src = img.src;
        popupTitle.textContent = game.name;
        popupGenre.textContent = game.genre.join(", ");
        popupFormat.textContent = game.type;
        popupWeight.textContent = game.weight;
        popupLanguage.textContent = game.language.join(", ");
        popupDescription.textContent = game.description;
        popup.style.display = "flex";
      };

      box.appendChild(img);
      gamesContainer.appendChild(box);
    });
  }
};

// Render all games initially
renderGames();

// Filter games on input change
searchInput.addEventListener("input", renderGames);
genreFilter.addEventListener("change", renderGames);
languageFilter.addEventListener("change", renderGames);

closeBtn.onclick = () => {
  popup.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
};

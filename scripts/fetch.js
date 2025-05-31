// fetch.js — handles loading of capsule data (title, lore, prompts)
document.addEventListener("DOMContentLoaded", () => {
  // Derive the transmission number from the file name
  const filePath = window.location.pathname;
  const match = filePath.match(/transmission-(\d+)\.html/);

  if (!match) {
    console.error("No valid transmission ID found in URL.");
    return;
  }

  const transmissionId = match[1];
  const jsonPath = `./transmission-${transmissionId}.json`;

  fetch(jsonPath)
    .then(response => {
      if (!response.ok) throw new Error("Failed to load JSON");
      return response.json();
    })
    .then(data => {
      const loreContainer = document.querySelector('#capsule-lore');
      const promptGallery = document.querySelector('#prompt-gallery');

      // Inject lore
      if (loreContainer) {
        loreContainer.innerHTML = `
          <h2>${data.title}</h2>
          <p>${data.lore}</p>
        `;
      }

      // Inject prompts
      if (promptGallery) {
        data.prompts.forEach(prompt => {
          const card = document.createElement('div');
          card.classList.add('prompt-card');
          card.innerHTML = `
            <h3>${prompt.title}</h3>
            <p>${prompt.description}</p>
            <code>${prompt.prompt}</code>
          `;
          promptGallery.appendChild(card);
        });
      }
    })
    .catch(error => {
      console.error('Error loading capsule data:', error);
    });
});
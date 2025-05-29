fetch('../data/transmission-002.json')
  .then(response => response.json())
  .then(data => {
    const loreContainer = document.querySelector('#capsule-lore');
    const promptGallery = document.querySelector('#prompt-gallery');

    // Inject the lore
    if (loreContainer) {
      loreContainer.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.lore}</p>
      `;
    }

    // Inject each prompt into the gallery
    if (promptGallery) {
      data.prompts.forEach(prompt => {
        const promptCard = document.createElement('div');
        promptCard.classList.add('prompt-card');
        promptCard.innerHTML = `
          <h3>${prompt.title}</h3>
          <p>${prompt.description}</p>
          <code>${prompt.prompt}</code>
        `;
        promptGallery.appendChild(promptCard);
      });
    }
  })
  .catch(error => {
    console.error('Error loading capsule data:', error);
  });
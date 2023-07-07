// Function to fetch technologies from the server
async function fetchTechnologies() {
  try {
    const response = await fetch("/getTechnologies");
    if (!response.ok) {
      throw new Error("Failed to fetch technologies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the hidden input field with comma-separated technology names
function updateTechnologiesInput(selectedTechnologyNames) {
  const technologyInput = document.getElementById("technology-input");
  technologyInput.value = selectedTechnologyNames.join(",");
}

// Function to add a technology tag to the technologies container
function addTechnologyTag(technology) {
  const tagsContainer = document.getElementById("tags");
  const tag = document.createElement("div");
  const selectedTechnologyNames = getSelectedTechnologyNames();
  const isDuplicate = selectedTechnologyNames.includes(technology.name);

  if (isDuplicate) {
    return;
  }

  tag.classList.add("tag");
  tag.innerHTML = `
    <span>${technology.name}</span>
    <button type="button" class="tag-remove-btn"><img src="/img/close-tag-icon.svg" alt="Close Tag" class="tag-icon"></button>
  `;
  tagsContainer.appendChild(tag);

  const removeButton = tag.querySelector(".tag-remove-btn");
  removeButton.addEventListener("click", function () {
    tag.remove();
    updateTechnologiesInput(getSelectedTechnologyNames());
  });
}

// Function to get the selected technology names
function getSelectedTechnologyNames() {
  const tagsContainer = document.getElementById("tags");
  const tagElements = tagsContainer.querySelectorAll(".tag");
  const selectedTechnologyNames = Array.from(
    tagElements,
    (tag) => tag.querySelector("span").textContent
  );
  return selectedTechnologyNames;
}

// Function to initialize technology autocomplete
async function initializeTechnologyAutocomplete() {
  try {
    const technologyTextInput = document.getElementById(
      "technology-text-input"
    );

    const technologies = await fetchTechnologies();

    new Awesomplete(technologyTextInput, {
      list: technologies.map((technology) => technology.name),
    });

    // Event listener for the click event on autocomplete suggestion
    technologyTextInput.addEventListener(
      "awesomplete-selectcomplete",
      function (event) {
        const selectedTechnology = technologies.find(
          (technology) => technology.name === event.text.value
        );
        addTechnologyTag(selectedTechnology);
        technologyTextInput.value = "";
        technologyTextInput.focus();

        updateTechnologiesInput(getSelectedTechnologyNames());
      }
    );
  } catch (error) {
    console.error(error);
  }
}

// Initialize technology autocomplete when the DOM is ready
document.addEventListener("DOMContentLoaded", initializeTechnologyAutocomplete);

// Function to open the modal and display the recipe instructions
function openModal(recipeId) {
    // Make an API request to fetch the recipe details by ID
    fetch(`/api/recipe/${recipeId}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Recipe not found!");
                return;
            }

            // Set the recipe name and instructions in the modal
            document.getElementById('modal-recipe-name').textContent = data.name;
            document.getElementById('modal-recipe-instructions').textContent = data.instructions;

            // Show the modal
            document.getElementById('recipeModal').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching recipe:', error);
            alert("Failed to fetch recipe details.");
        });
}

// Function to close the modal
function closeModal() {
    document.getElementById('recipeModal').style.display = 'none';
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById('recipeModal')) {
        closeModal();
    }
}


// Function to close the modal
function closeModal() {
    document.getElementById('recipeModal').style.display = 'none';
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById('recipeModal')) {
        closeModal();
    }
}

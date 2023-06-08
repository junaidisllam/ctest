  // Get the search input field and add an event listener
  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('input', handleInput);

  // Function to handle user input
  function handleInput() {
    const userInput = searchInput.value;
    
    // Fetch search suggestions or use predefined array
    const searchSuggestions = [
      'apple',
      'banana',
      'cherry',
      'date',
      'elderberry',
      'fig',
      'grape',
      'honeydew',
      'kiwi',
      'lemon',
      'mango'
    ];
    
    // Filter suggestions based on user input
    const filteredSuggestions = searchSuggestions.filter(suggestion => {
      return suggestion.toLowerCase().includes(userInput.toLowerCase());
    });
    
    // Display the filtered suggestions in a dropdown menu
    const dropdownMenu = document.createElement('ul');
    dropdownMenu.classList.add('autocomplete-dropdown');
    
    filteredSuggestions.forEach(suggestion => {
      const listItem = document.createElement('li');
      listItem.textContent = suggestion;
      listItem.addEventListener('click', () => {
        searchInput.value = suggestion;
        dropdownMenu.remove();
      });
      dropdownMenu.appendChild(listItem);
    });
    
    // Remove any existing dropdown menus
    const existingDropdown = document.querySelector('.autocomplete-dropdown');
    if (existingDropdown) {
      existingDropdown.remove();
    }
    
    // Append the dropdown menu below the search input field
    searchInput.parentNode.appendChild(dropdownMenu);
  }

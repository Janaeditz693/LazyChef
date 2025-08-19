// LazyChef App JavaScript

// App Data
const appData = {
  app_info: {
    name: "LazyChef",
    tagline: "Quick recipes for lazy people",
    mascot: "Lazy sloth"
  },
  cooking_levels: [
    {
      level: 1,
      name: "No-cook",
      description: "Sandwiches, wraps, salads",
      icon: "🥗",
      color: "#22C55E"
    },
    {
      level: 2,
      name: "One-pan meals",
      description: "Everything in one pot/pan",
      icon: "🍳",
      color: "#F97316"
    },
    {
      level: 3,
      name: "Microwave-only",
      description: "Quick microwave recipes",
      icon: "⚡",
      color: "#3B82F6"
    }
  ],
  featured_recipes: [
    {
      id: "1",
      name: "5-Minute Vegetable Pulao",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop",
      prep_time: "5 min",
      ingredients: 3,
      level: 2,
      category: "One-pan meals",
      instructions: [
        "Soak rice for 2 minutes",
        "Chop vegetables of your choice",
        "Add rice, vegetables, spices and water to pressure cooker",
        "Cook on medium flame for 3 minutes",
        "Your instant pulao is ready!"
      ],
      ingredient_list: ["Rice", "Mixed vegetables", "Basic spices"]
    }
  ],
  recipes: [
    {
      id: "2",
      name: "Scrambled Egg Sandwich",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      prep_time: "3 min",
      ingredients: 3,
      level: 1,
      category: "No-cook",
      instructions: [
        "Whisk 2 eggs in a bowl",
        "Add chopped onions, tomatoes, salt",
        "Pour into pan, place bread slices on top",
        "Your sandwich is ready!"
      ],
      ingredient_list: ["Eggs", "Bread", "Vegetables"]
    },
    {
      id: "3",
      name: "3-Ingredient Pasta",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      prep_time: "8 min",
      ingredients: 3,
      level: 2,
      category: "One-pan meals",
      instructions: [
        "Cook pasta in salted water",
        "Heat marinara sauce in pan",
        "Mix pasta with sauce",
        "Top with cheese and serve"
      ],
      ingredient_list: ["Pasta", "Marinara sauce", "Cheese"]
    },
    {
      id: "4",
      name: "Microwave Mug Cake",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop",
      prep_time: "2 min",
      ingredients: 3,
      level: 3,
      category: "Microwave-only",
      instructions: [
        "Mix flour, cocoa, sugar in mug",
        "Add milk and oil, stir well",
        "Microwave for 90 seconds",
        "Enjoy your instant cake!"
      ],
      ingredient_list: ["Flour mix", "Milk", "Oil"]
    },
    {
      id: "5",
      name: "Tuna Pasta Salad",
      image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400&h=300&fit=crop",
      prep_time: "4 min",
      ingredients: 3,
      level: 1,
      category: "No-cook",
      instructions: [
        "Cook pasta and let cool",
        "Mix with canned tuna",
        "Add mayo and seasonings",
        "Chill and serve"
      ],
      ingredient_list: ["Cooked pasta", "Canned tuna", "Mayo"]
    },
    {
      id: "6",
      name: "Quick Quesadilla",
      image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&h=300&fit=crop",
      prep_time: "5 min",
      ingredients: 2,
      level: 2,
      category: "One-pan meals",
      instructions: [
        "Place tortilla in pan",
        "Add cheese on half of tortilla",
        "Fold tortilla over cheese",
        "Cook 2 minutes each side until crispy"
      ],
      ingredient_list: ["Tortilla", "Cheese"]
    },
    {
      id: "7",
      name: "Microwave Rice Bowl",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
      prep_time: "6 min",
      ingredients: 3,
      level: 3,
      category: "Microwave-only",
      instructions: [
        "Microwave rice pouch for 2 minutes",
        "Heat frozen vegetables in microwave",
        "Mix rice and vegetables",
        "Season and enjoy"
      ],
      ingredient_list: ["Rice pouch", "Frozen vegetables", "Seasonings"]
    },
    {
      id: "8",
      name: "PB&J Toast",
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop",
      prep_time: "2 min",
      ingredients: 3,
      level: 1,
      category: "No-cook",
      instructions: [
        "Toast bread slices",
        "Spread peanut butter on one slice",
        "Spread jam on the other slice",
        "Put slices together and enjoy"
      ],
      ingredient_list: ["Bread", "Peanut butter", "Jam"]
    }
  ],
  badges: [
    {
      name: "Microwave Master",
      icon: "⚡",
      description: "Completed 5 microwave recipes",
      color: "#3B82F6"
    },
    {
      name: "One-Pot Wonder",
      icon: "🍳",
      description: "Made 3 one-pan meals",
      color: "#F97316"
    },
    {
      name: "Dish Avoider",
      icon: "🧽",
      description: "Made 5 no-cleanup meals",
      color: "#22C55E"
    },
    {
      name: "Speed Demon",
      icon: "⏱️",
      description: "Completed 10 recipes under 5 minutes",
      color: "#EF4444"
    },
    {
      name: "Minimalist Chef",
      icon: "🎯",
      description: "Made 5 recipes with 3 ingredients or less",
      color: "#8B5CF6"
    },
    {
      name: "Lazy Streak",
      icon: "😴",
      description: "Cooked for 7 days in a row",
      color: "#F59E0B"
    }
  ],
  quick_filters: [
    {
      name: "<5 min",
      icon: "⏱️",
      color: "#EF4444"
    },
    {
      name: "3-ingredients",
      icon: "🎯",
      color: "#8B5CF6"
    },
    {
      name: "Microwave",
      icon: "⚡",
      color: "#3B82F6"
    }
  ],
  sloth_quotes: [
    "Slow and steady wins the meal!",
    "Why rush when you can relax?",
    "Lazy cooking is smart cooking!",
    "Less effort, more flavor!",
    "Take it easy, chef!"
  ]
};

// App State
let appState = {
  currentScreen: 'welcome',
  currentTab: 'home',
  userName: '',
  selectedLevel: null,
  savedRecipes: ['2', '5'],
  earnedBadges: ['One-Pot Wonder', 'Dish Avoider', 'Speed Demon'],
  cookingStreak: 3,
  recipesCooked: 12,
  filteredRecipes: [],
  searchQuery: ''
};

// Utility Functions
function getAllRecipes() {
  return [...appData.featured_recipes, ...appData.recipes];
}

function getRecipeById(id) {
  return getAllRecipes().find(recipe => recipe.id === id);
}

function showScreen(screenId) {
  console.log('Showing screen:', screenId);
  
  // Hide all screens first
  const allScreens = document.querySelectorAll('.screen');
  allScreens.forEach(screen => {
    screen.classList.remove('active', 'sliding-out');
  });
  
  // Show the target screen
  setTimeout(() => {
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
      targetScreen.classList.add('active');
      appState.currentScreen = screenId;
      console.log('Screen changed to:', screenId);
    }
  }, 100);
}

function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const navBtns = document.querySelectorAll('.nav-btn');
  
  tabs.forEach(tab => tab.classList.remove('active'));
  navBtns.forEach(btn => btn.classList.remove('active'));
  
  const targetTab = document.getElementById(`${tabId}-tab`);
  const targetNavBtn = document.querySelector(`[data-tab="${tabId}"]`);
  
  if (targetTab) targetTab.classList.add('active');
  if (targetNavBtn) targetNavBtn.classList.add('active');
  
  appState.currentTab = tabId;
}

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.add('show');
    }, 10);
  }
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  }
}

// Onboarding Functions
function initializeOnboarding() {
  console.log('Initializing onboarding...');
  
  const continueBtn = document.getElementById('continue-btn');
  const userNameInput = document.getElementById('user-name');
  
  if (!continueBtn || !userNameInput) {
    console.error('Onboarding elements not found');
    return;
  }
  
  // Ensure input is properly focused and functional
  userNameInput.addEventListener('focus', () => {
    console.log('Input focused');
  });
  
  userNameInput.addEventListener('input', (e) => {
    console.log('Input value changed:', e.target.value);
  });
  
  continueBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Continue button clicked');
    
    const name = userNameInput.value.trim();
    console.log('Name entered:', name);
    
    if (name) {
      appState.userName = name;
      console.log('Name saved, showing level screen');
      showScreen('level-screen');
    } else {
      alert('Please enter your name first! 🦥');
    }
  });
  
  userNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      continueBtn.click();
    }
  });
  
  console.log('Onboarding initialized');
}

function initializeLevelSelection() {
  console.log('Initializing level selection...');
  
  const levelCards = document.querySelectorAll('.level-card');
  
  levelCards.forEach(card => {
    card.addEventListener('click', () => {
      console.log('Level card clicked:', card.dataset.level);
      
      levelCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      appState.selectedLevel = parseInt(card.dataset.level);
      
      console.log('Selected level:', appState.selectedLevel);
      
      setTimeout(() => {
        showScreen('main-app');
        setTimeout(() => {
          initializeMainApp();
        }, 200);
      }, 1000);
    });
  });
}

// Main App Functions
function initializeMainApp() {
  console.log('Initializing main app...');
  
  updateGreeting();
  updateSlothQuote();
  renderFeaturedRecipe();
  renderAllRecipes();
  renderBadges();
  renderSavedRecipes();
  initializeNavigation();
  initializeSearchAndFilters();
  initializeFridgeDetective();
  initializeModalHandlers();
  
  console.log('Main app initialized');
}

function updateGreeting() {
  const greetingText = document.getElementById('greeting-text');
  const profileName = document.getElementById('profile-name');
  
  if (greetingText) greetingText.textContent = `Hello, ${appState.userName}! 🦥`;
  if (profileName) profileName.textContent = appState.userName;
}

function updateSlothQuote() {
  const slothQuote = document.getElementById('sloth-quote');
  const randomQuote = appData.sloth_quotes[Math.floor(Math.random() * appData.sloth_quotes.length)];
  if (slothQuote) slothQuote.textContent = randomQuote;
}

function renderFeaturedRecipe() {
  const featuredRecipe = document.getElementById('featured-recipe');
  const recipe = appData.featured_recipes[0];
  
  if (featuredRecipe) {
    featuredRecipe.addEventListener('click', () => {
      showRecipeDetail(recipe);
    });
  }
}

function renderAllRecipes() {
  const recipesGrid = document.getElementById('recipes-grid');
  if (!recipesGrid) return;
  
  const allRecipes = getAllRecipes();
  recipesGrid.innerHTML = '';
  
  allRecipes.forEach(recipe => {
    const recipeCard = createRecipeCard(recipe);
    recipesGrid.appendChild(recipeCard);
  });
  
  appState.filteredRecipes = allRecipes;
}

function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  card.innerHTML = `
    <div class="recipe-card-image">
      <img src="${recipe.image}" alt="${recipe.name}">
    </div>
    <div class="recipe-card-content">
      <h3>${recipe.name}</h3>
      <div class="recipe-card-meta">
        <span>⏱️ ${recipe.prep_time}</span>
        <span>🎯 ${recipe.ingredients}</span>
      </div>
    </div>
  `;
  
  card.addEventListener('click', () => {
    showRecipeDetail(recipe);
  });
  
  return card;
}

function showRecipeDetail(recipe) {
  const modal = document.getElementById('recipe-modal');
  const recipeDetail = document.getElementById('recipe-detail');
  
  if (!modal || !recipeDetail) return;
  
  recipeDetail.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" class="recipe-detail-image">
    <div class="recipe-detail-content">
      <h2>${recipe.name}</h2>
      <div class="recipe-detail-meta">
        <span class="time-badge">⏱️ ${recipe.prep_time}</span>
        <span class="ingredient-badge">🎯 ${recipe.ingredients} ingredients</span>
      </div>
      
      <div class="ingredients-list">
        <h3>🛒 Ingredients</h3>
        ${recipe.ingredient_list.map(ingredient => `
          <div class="ingredient-item">
            <input type="checkbox" id="ingredient-${ingredient}">
            <label for="ingredient-${ingredient}">${ingredient}</label>
          </div>
        `).join('')}
      </div>
      
      <div class="recipe-instructions">
        <h3>📝 Instructions</h3>
        ${recipe.instructions.map((instruction, index) => `
          <div class="instruction-step">
            <div class="step-number">${index + 1}</div>
            <div>${instruction}</div>
          </div>
        `).join('')}
      </div>
      
      <div class="recipe-actions">
        <button class="btn btn--primary" onclick="completeRecipe('${recipe.id}')">I Made This! 🎉</button>
        <button class="btn btn--secondary" onclick="toggleSaveRecipe('${recipe.id}')">${appState.savedRecipes.includes(recipe.id) ? '❤️ Saved' : '🤍 Save'}</button>
      </div>
    </div>
  `;
  
  showModal('recipe-modal');
}

function completeRecipe(recipeId) {
  // Simulate earning a badge
  const badges = ['Speed Demon', 'Minimalist Chef', 'Microwave Master'];
  const randomBadge = badges[Math.floor(Math.random() * badges.length)];
  
  if (!appState.earnedBadges.includes(randomBadge)) {
    appState.earnedBadges.push(randomBadge);
    showBadgeEarned(randomBadge);
  }
  
  appState.recipesCooked++;
  updateProfileStats();
  hideModal('recipe-modal');
}

function toggleSaveRecipe(recipeId) {
  if (appState.savedRecipes.includes(recipeId)) {
    appState.savedRecipes = appState.savedRecipes.filter(id => id !== recipeId);
  } else {
    appState.savedRecipes.push(recipeId);
  }
  
  renderSavedRecipes();
  // Refresh the modal content to update the save button
  const recipe = getRecipeById(recipeId);
  showRecipeDetail(recipe);
}

function showBadgeEarned(badgeName) {
  const badge = appData.badges.find(b => b.name === badgeName);
  if (!badge) return;
  
  const earnedBadgeIcon = document.getElementById('earned-badge-icon');
  const earnedBadgeName = document.getElementById('earned-badge-name');
  const earnedBadgeDesc = document.getElementById('earned-badge-description');
  
  if (earnedBadgeIcon) earnedBadgeIcon.textContent = badge.icon;
  if (earnedBadgeName) earnedBadgeName.textContent = badge.name;
  if (earnedBadgeDesc) earnedBadgeDesc.textContent = badge.description;
  
  showModal('badge-modal');
  renderBadges();
  updateProfileStats();
}

function renderBadges() {
  const badgesGrid = document.getElementById('badges-grid');
  if (!badgesGrid) return;
  
  badgesGrid.innerHTML = '';
  
  appData.badges.forEach(badge => {
    const isEarned = appState.earnedBadges.includes(badge.name);
    const badgeCard = document.createElement('div');
    badgeCard.className = `badge-card ${isEarned ? 'earned' : ''}`;
    badgeCard.innerHTML = `
      <div class="badge-icon">${badge.icon}</div>
      <div class="badge-name">${badge.name}</div>
      <p class="badge-description">${badge.description}</p>
    `;
    badgesGrid.appendChild(badgeCard);
  });
}

function renderSavedRecipes() {
  const savedRecipesList = document.getElementById('saved-recipes-list');
  if (!savedRecipesList) return;
  
  savedRecipesList.innerHTML = '';
  
  appState.savedRecipes.forEach(recipeId => {
    const recipe = getRecipeById(recipeId);
    if (recipe) {
      const savedItem = document.createElement('div');
      savedItem.className = 'saved-recipe-item';
      savedItem.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="saved-recipe-image">
        <div class="saved-recipe-info">
          <h4>${recipe.name}</h4>
          <p>⏱️ ${recipe.prep_time} • 🎯 ${recipe.ingredients} ingredients</p>
        </div>
      `;
      
      savedItem.addEventListener('click', () => {
        showRecipeDetail(recipe);
      });
      
      savedRecipesList.appendChild(savedItem);
    }
  });
}

function updateProfileStats() {
  const recipesCooked = document.getElementById('recipes-cooked');
  const badgesEarned = document.getElementById('badges-earned');
  const savedRecipes = document.getElementById('saved-recipes');
  const streakCount = document.getElementById('streak-count');
  
  if (recipesCooked) recipesCooked.textContent = appState.recipesCooked;
  if (badgesEarned) badgesEarned.textContent = appState.earnedBadges.length;
  if (savedRecipes) savedRecipes.textContent = appState.savedRecipes.length;
  if (streakCount) streakCount.textContent = appState.cookingStreak;
}

// Navigation
function initializeNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      showTab(tabId);
    });
  });
  
  // Handle quick filter buttons on home page
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      showTab('search');
      applyQuickFilter(btn.dataset.filter, btn.dataset.value);
    });
  });
  
  // Handle level cards on home page
  const levelCardsMini = document.querySelectorAll('.level-card-mini');
  levelCardsMini.forEach(card => {
    card.addEventListener('click', () => {
      showTab('search');
      filterByLevel(parseInt(card.dataset.level));
    });
  });
  
  // Handle fridge detective button
  const fridgeDetectiveBtn = document.getElementById('fridge-detective-btn');
  if (fridgeDetectiveBtn) {
    fridgeDetectiveBtn.addEventListener('click', () => {
      showTab('fridge');
    });
  }
}

// Search and Filters
function initializeSearchAndFilters() {
  const searchInput = document.getElementById('search-input');
  const filterTabs = document.querySelectorAll('.filter-tab');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value.toLowerCase();
      filterRecipes();
    });
  }
  
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const category = tab.dataset.category;
      filterByCategory(category);
    });
  });
}

function applyQuickFilter(filterType, value) {
  const allRecipes = getAllRecipes();
  let filtered = allRecipes;
  
  if (filterType === 'time') {
    filtered = allRecipes.filter(recipe => parseInt(recipe.prep_time) <= parseInt(value));
  } else if (filterType === 'ingredients') {
    filtered = allRecipes.filter(recipe => recipe.ingredients <= parseInt(value));
  } else if (filterType === 'method' && value === 'microwave') {
    filtered = allRecipes.filter(recipe => recipe.level === 3);
  }
  
  renderFilteredRecipes(filtered);
}

function filterByLevel(level) {
  const allRecipes = getAllRecipes();
  const filtered = allRecipes.filter(recipe => recipe.level === level);
  renderFilteredRecipes(filtered);
}

function filterByCategory(category) {
  const allRecipes = getAllRecipes();
  let filtered = allRecipes;
  
  if (category !== 'all') {
    const categoryMap = {
      'no-cook': 1,
      'one-pan': 2,
      'microwave': 3
    };
    filtered = allRecipes.filter(recipe => recipe.level === categoryMap[category]);
  }
  
  renderFilteredRecipes(filtered);
}

function filterRecipes() {
  const allRecipes = getAllRecipes();
  let filtered = allRecipes;
  
  if (appState.searchQuery) {
    filtered = filtered.filter(recipe => 
      recipe.name.toLowerCase().includes(appState.searchQuery) ||
      recipe.ingredient_list.some(ingredient => 
        ingredient.toLowerCase().includes(appState.searchQuery)
      )
    );
  }
  
  renderFilteredRecipes(filtered);
}

function renderFilteredRecipes(recipes) {
  const recipesGrid = document.getElementById('recipes-grid');
  if (!recipesGrid) return;
  
  recipesGrid.innerHTML = '';
  
  if (recipes.length === 0) {
    recipesGrid.innerHTML = '<div class="text-center" style="grid-column: 1/-1; padding: 2rem;"><h3>No recipes found 😴</h3><p>Try a different search or filter!</p></div>';
    return;
  }
  
  recipes.forEach(recipe => {
    const recipeCard = createRecipeCard(recipe);
    recipesGrid.appendChild(recipeCard);
  });
}

// Fridge Detective
function initializeFridgeDetective() {
  const fridgeInput = document.getElementById('fridge-input');
  const findRecipesBtn = document.getElementById('find-recipes-btn');
  const ingredientTags = document.querySelectorAll('.ingredient-tag');
  
  if (findRecipesBtn && fridgeInput) {
    findRecipesBtn.addEventListener('click', () => {
      const ingredients = fridgeInput.value.toLowerCase().split(',').map(i => i.trim());
      findMatchingRecipes(ingredients);
    });
    
    fridgeInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        findRecipesBtn.click();
      }
    });
  }
  
  ingredientTags.forEach(tag => {
    tag.addEventListener('click', () => {
      if (fridgeInput) {
        const currentValue = fridgeInput.value;
        const newIngredient = tag.textContent;
        
        if (currentValue) {
          fridgeInput.value = currentValue + ', ' + newIngredient;
        } else {
          fridgeInput.value = newIngredient;
        }
      }
    });
  });
}

function findMatchingRecipes(userIngredients) {
  const fridgeResults = document.getElementById('fridge-results');
  if (!fridgeResults) return;
  
  const allRecipes = getAllRecipes();
  
  const matchingRecipes = allRecipes.filter(recipe => {
    return recipe.ingredient_list.some(ingredient => 
      userIngredients.some(userIngredient => 
        ingredient.toLowerCase().includes(userIngredient) || 
        userIngredient.includes(ingredient.toLowerCase())
      )
    );
  });
  
  fridgeResults.innerHTML = '';
  
  if (matchingRecipes.length === 0) {
    fridgeResults.innerHTML = `
      <div class="text-center" style="padding: 2rem;">
        <h3>No matches found 🤔</h3>
        <p>Try adding more common ingredients like eggs, bread, or cheese!</p>
      </div>
    `;
    return;
  }
  
  const resultsTitle = document.createElement('h3');
  resultsTitle.textContent = `🎉 Found ${matchingRecipes.length} recipe${matchingRecipes.length > 1 ? 's' : ''}!`;
  resultsTitle.style.marginBottom = '1rem';
  fridgeResults.appendChild(resultsTitle);
  
  const resultsGrid = document.createElement('div');
  resultsGrid.className = 'recipes-grid';
  resultsGrid.style.padding = '0';
  
  matchingRecipes.forEach(recipe => {
    const recipeCard = createRecipeCard(recipe);
    resultsGrid.appendChild(recipeCard);
  });
  
  fridgeResults.appendChild(resultsGrid);
}

// Modal Handlers
function initializeModalHandlers() {
  const recipeModalClose = document.getElementById('modal-close');
  const badgeModalClose = document.getElementById('badge-modal-close');
  const badgeContinue = document.getElementById('badge-continue');
  
  if (recipeModalClose) {
    recipeModalClose.addEventListener('click', () => {
      hideModal('recipe-modal');
    });
  }
  
  if (badgeModalClose) {
    badgeModalClose.addEventListener('click', () => {
      hideModal('badge-modal');
    });
  }
  
  if (badgeContinue) {
    badgeContinue.addEventListener('click', () => {
      hideModal('badge-modal');
    });
  }
  
  // Close modals when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      hideModal(e.target.id);
    }
  });
}

// Global functions for HTML onclick handlers
window.completeRecipe = completeRecipe;
window.toggleSaveRecipe = toggleSaveRecipe;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing app...');
  
  // Initialize components
  initializeOnboarding();
  updateProfileStats();
  
  // Set up level selection when screen becomes visible
  const levelScreen = document.getElementById('level-screen');
  if (levelScreen) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (levelScreen.classList.contains('active')) {
            initializeLevelSelection();
            observer.disconnect();
          }
        }
      });
    });
    
    observer.observe(levelScreen, { attributes: true });
  }
  
  console.log('App initialization complete');
});

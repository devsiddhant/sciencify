// DOM Elements
const themeToggle = document.getElementById("theme-toggle")
const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelector(".nav-links")
const searchInput = document.getElementById("article-search")
const searchBtn = document.getElementById("search-btn")
const categoryFilter = document.getElementById("category-filter")
const loadMoreBtn = document.getElementById("load-more")
const articleCards = document.querySelectorAll(".article-card")

// Theme Toggle Functionality
function toggleTheme() {
  document.body.classList.toggle("dark-mode")

  // Save preference to localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark")
  } else {
    localStorage.setItem("theme", "light")
  }
}

// Check for saved theme preference
function loadTheme() {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode")
  }
}

// Mobile Navigation Toggle
function toggleNav() {
  navToggle.classList.toggle("active")
  navLinks.classList.toggle("active")

  // Prevent scrolling when nav is open
  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = ""
  }
}

// Article Search Functionality
function searchArticles() {
  const searchTerm = searchInput.value.toLowerCase()
  const selectedCategory = categoryFilter ? categoryFilter.value : "all"

  articleCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase()
    const content = card.querySelector("p").textContent.toLowerCase()
    const category = card.dataset.category

    const matchesSearch = title.includes(searchTerm) || content.includes(searchTerm)
    const matchesCategory = selectedCategory === "all" || category === selectedCategory

    if (matchesSearch && matchesCategory) {
      card.style.display = "flex"
    } else {
      card.style.display = "none"
    }
  })
}

// Intersection Observer for Animations
function setupAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  fadeElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"

    // Add delay if specified
    if (element.classList.contains("delay-1")) {
      element.style.transitionDelay = "0.1s"
    } else if (element.classList.contains("delay-2")) {
      element.style.transitionDelay = "0.2s"
    } else if (element.classList.contains("delay-3")) {
      element.style.transitionDelay = "0.3s"
    }

    observer.observe(element)
  })
}

// Load More Articles Functionality
function setupLoadMore() {
  if (!loadMoreBtn) return

  // Initially show only first 6 articles
  const initialCount = 6
  const increment = 3
  let visibleCount = initialCount

  // Hide articles beyond initial count
  articleCards.forEach((card, index) => {
    if (index >= initialCount) {
      card.style.display = "none"
    }
  })

  loadMoreBtn.addEventListener("click", () => {
    visibleCount += increment

    articleCards.forEach((card, index) => {
      if (index < visibleCount) {
        card.style.display = "flex"

        // Add animation to newly visible cards
        if (index >= visibleCount - increment) {
          card.classList.add("fade-in")
          setTimeout(() => {
            card.classList.remove("fade-in")
          }, 500)
        }
      }
    })

    // Hide button if all articles are visible
    if (visibleCount >= articleCards.length) {
      loadMoreBtn.style.display = "none"
    }
  })
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Load saved theme
  loadTheme()

  // Setup event listeners
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }

  if (navToggle) {
    navToggle.addEventListener("click", toggleNav)
  }

  if (searchInput && searchBtn) {
    searchBtn.addEventListener("click", searchArticles)
    searchInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        searchArticles()
      }
    })
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", searchArticles)
  }

  // Setup animations
  setupAnimations()

  // Setup load more functionality
  setupLoadMore()

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })
})

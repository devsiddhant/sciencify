# Sciencify

![Sciencify Banner](https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)

## Overview

Sciencify is a modern, responsive website dedicated to making complex scientific concepts accessible to everyone. With a clean, minimalist black and white aesthetic inspired by Nothing phones UI, Sciencify offers in-depth articles on various scientific topics, from quantum physics and neural networks to astronomy and biology.

## Features

- **Clean, Minimalist Design**: Black and white aesthetic with modern typography and subtle animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes with user preference saved
- **Article Search & Filtering**: Search functionality and category filtering for articles
- **Interactive Elements**: Animations, hover effects, and smooth transitions
- **Accessible Navigation**: Semantic HTML and keyboard-navigable interface
- **Math Rendering**: KaTeX integration for mathematical formulas
- **Table of Contents**: Auto-generated TOC for article navigation

## Pages

- **Home**: Landing page with hero section, features, and latest articles
- **Content**: Browse all articles with search and filtering capabilities
- **About**: Information about the site's mission and creator
- **Articles**: Individual article pages with rich content formatting

## Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Advanced styling with custom properties, flexbox, and grid
- **JavaScript**: Interactive features and animations
- **Font Awesome**: Icons for UI elements
- **Google Fonts**: Typography with Space Mono and Work Sans
- **KaTeX**: Mathematical formula rendering

## Getting Started

### Prerequisites

- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript (for modifications)

### Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/devsiddhant/sciencify.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`
   cd sciencify
   \`\`\`

3. Open `index.html` in your browser or set up a local server.

### Deployment

This site is designed to be hosted on GitHub Pages:

1. Push the repository to GitHub
2. Go to repository settings
3. Navigate to "Pages" section
4. Select the main branch as the source
5. Save the settings

The site will be available at `https://[username].github.io/sciencify/`

## Project Structure

\`\`\`
sciencify/
├── index.html              # Home page
├── content.html            # Articles listing page
├── about.html              # About page
├── articles/               # Individual article pages
│   └── quantum-computing.html
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
└── README.md               # Project documentation
\`\`\`

## Customization

### Adding New Articles

1. Create a new HTML file in the `articles/` directory
2. Use the existing article template structure
3. Add the article card to `content.html`
4. Link the article from the home page if featuring it

### Modifying Styles

The `style.css` file uses CSS custom properties (variables) for easy theming:

\`\`\`css
:root {
  --color-background: #ffffff;
  --color-text: #121212;
  /* other variables */
}
\`\`\`

Modify these variables to change the color scheme throughout the site.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

Siddhant Adhikari - [siddhantadhikari@proton.me](mailto:siddhantadhikari@proton.me)

Project Link: [https://github.com/devsiddhant/sciencify](https://github.com/devsiddhant/sciencify)

Mastodon: [https://techhub.social/@curious](https://techhub.social/@curious)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Unsplash](https://unsplash.com/) for stock images
- [KaTeX](https://katex.org/) for math rendering

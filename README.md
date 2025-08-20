
# Urban Table - Modern Dining Experience

![Urban Table Hero Section Screenshot](https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80)
*A modern restaurant website template built with HTML, CSS, and JavaScript.*

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Commit History](#commit-history)
- [Contributing](#contributing)
- [License](#license)

## About

Urban Table is a sleek, modern restaurant website template designed to showcase a contemporary dining experience. It features a clean, responsive design, an engaging menu display, a photo gallery, location details, and a functional contact form. The template aims to provide a seamless user experience across various devices, highlighting fresh, seasonal dishes and a welcoming atmosphere.

## Features

-   **Responsive Navigation:** A sticky navigation bar that adapts to different screen sizes, including a mobile-friendly toggle menu.
-   **Hero Section:** An inviting full-screen hero image with a clear call to action.
-   **About Section:** Details about the restaurant's story, philosophy, and key features (e.g., fresh ingredients, creative menu).
-   **Dynamic Menu Display:** A visually appealing section to showcase menu items with descriptions and prices.
-   **Image Gallery:** A responsive grid gallery with a lightbox feature for viewing high-resolution images of dishes and the restaurant ambiance.
-   **Location & Hours:** Clear presentation of address, phone, and operating hours, integrated with a Google Maps embed.
-   **Contact Form:** A functional reservation/inquiry form with client-side validation and user feedback messages.
-   **Smooth Scrolling:** Enhanced user experience with smooth transitions when navigating between sections.
-   **Scroll-to-Top Button:** A convenient button that appears on scroll to quickly return to the top of the page.
-   **Fade-in Animations:** Subtle animations for content sections as they enter the viewport, adding a modern touch.
-   **Accessibility (A11y) Focus:** Semantic HTML, ARIA attributes, keyboard navigation support, and `prefers-reduced-motion` consideration.
-   **Performance Optimizations:** Lazy loading for images and deferred script loading.

## Technologies Used

-   **HTML5:** For semantic structure and content.
-   **CSS3:** For styling, layout, and responsive design.
-   **JavaScript (ES6+):** For interactive elements, form handling, and dynamic UI updates.
-   **Google Fonts:** For custom typography (`Playfair Display` and `Inter`).
-   **Font Awesome:** For scalable vector icons.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a web browser to view this template. For development, a code editor is recommended.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/urban-table.git
    ```
    *(Note: Replace `your-username/urban-table.git` with the actual repository URL if you host it.)*
2.  **Navigate to the project directory:**
    ```bash
    cd urban-table
    ```
3.  **Open `index.html`:**
    Simply open the `index.html` file in your preferred web browser.

    ```bash
    # On macOS
    open index.html

    # On Windows
    start index.html
    ```

## Project Structure

```
urban-table/
├── index.html          # Main HTML file for the website
├── style.css           # All custom CSS styles
├── app.js              # All custom JavaScript functionalities
└── README.md           # This README file
```

## Commit History

This project's development history has been structured to simulate a realistic progression, demonstrating iterative improvements and feature additions. Below are the key commits:

-   **`chore: initialize project with semantic HTML, base CSS, and navigation JS`**
    -   Initial setup of the core website structure.
    -   Clean separation of HTML, CSS, and JavaScript files.
    -   Implementation of basic navigation, mobile menu toggle, and smooth scrolling.
    -   Focus on semantic HTML5 elements and initial accessibility considerations.

-   **`perf(a11y): optimize images, defer scripts, add prefers-reduced-motion and focus states`**
    -   Enhancements for performance and accessibility.
    -   Ensured images are lazy-loaded for faster page rendering.
    -   Added CSS rules to respect `prefers-reduced-motion` for users with motion sensitivities.
    -   Improved keyboard focus states for better navigability.
    -   Minor tweaks for Google Fonts loading (`display=swap`).

-   **`feat: add active section highlighting, lightbox a11y, and toast messages for contact form`**
    -   Introduction of new features and UI/UX polish.
    -   Implemented active navigation link highlighting based on scroll position.
    -   Enhanced the gallery lightbox for better accessibility, including keyboard navigation and ARIA attributes.
    -   Upgraded contact form feedback with ARIA live regions for screen reader announcements of success/error messages.
    -   Added a subtle visual indicator for the active navigation link.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/YourFeature`).
6.  Open a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
```

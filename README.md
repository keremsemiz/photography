# `KS Photography`

Welcome to **`KS Photography`**, a personal website to showcase my photography. This site is built using only HTML and CSS, focusing on a clean and responsive design to beautifully present images.

## Features

- **Image Gallery**: A gallery to showcase various photography projects.
- **Responsive Design**: Works across different screen sizes, from mobile to desktop.
- **CSS Animations**: Subtle animations to enhance the viewing experience.
- **Lightbox Effect**: Click on images to view them in a larger, centered modal.

## Getting Started

### Prerequisites

To view or modify the project, you only need a web browser and a text editor.

### Installation

0. Before you install, make sure to try the deployed version:
    https://keremsemiz.github.io/photography/

1. Clone the repository:
   ```bash
   git clone https://github.com/keremsemiz/photography.git
   ```
2. Navigate to the project directory:
   ```bash
   cd photography
   ```
3. Open `index.html` in your web browser to view the site locally.

### Customizing the Gallery

To add new photos to the gallery:

1. Place your image files in the `images` directory.
2. Open `index.html` and add your new images within the gallery section.

Example:
```html
<div class="gallery">
  <img src="images/sunset.jpg" alt="Sunset Over Mountains" />
  <div class="desc">Sunset Over Mountains</div>
</div>
```

### CSS Styling

To modify the look and feel, edit the `styles.css` file located in the `css` directory.

Example to add a border to images:
```css
.gallery img {
  border: 2px solid #fff;
}
```

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork this repository, create a new branch, and submit a pull request.

## Contact

For any questions or feedback, please contact [`Kerem Semiz`](mailto:kerem@hackclubberlin.com).

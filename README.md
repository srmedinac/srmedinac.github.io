# Researcher Portfolio Website

A modern, responsive portfolio website for researchers with an integrated blog section. Built with HTML, CSS, and JavaScript, and designed to be hosted on GitHub Pages.

## Features

- **Clean, Professional Design**: Academic-focused aesthetic suitable for researchers
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Blog Section**: Easy-to-maintain blog for sharing research insights and paper discussions
- **Publications Showcase**: Dedicated section for highlighting your research work
- **Social Media Integration**: Links to Google Scholar, GitHub, LinkedIn, and more
- **Free Hosting**: Deploys easily to GitHub Pages at no cost

## Quick Start

### 1. Customize Your Information

Edit `index.html` to add your personal information:

- **Line 6**: Change the page title
- **Lines 16, 22-24**: Update your name and tagline
- **Lines 26-31**: Add links to your social media profiles
- **Lines 40-52**: Write your "About Me" section
- **Lines 60-98**: Add your publications
- **Lines 120-124**: Update your contact information

### 2. Configure GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the branch you want to deploy (e.g., `main` or `claude/researcher-portfolio-site-Br8jn`)
4. Click "Save"
5. Your site will be available at `https://[your-username].github.io/[repository-name]/`

For a custom domain (optional):
- If your repository is named `[your-username].github.io`, your site will be at `https://[your-username].github.io/`

### 3. Adding Blog Posts

To add a new blog post:

#### Step 1: Create the HTML file

1. Copy the template from `blog/blog-post-template.html`
2. Save it in the `blog/` directory with a descriptive filename (e.g., `my-new-post.html`)
3. Update the content:
   - Change the title
   - Update the date and tags
   - Write your content

#### Step 2: Add to the blog index

Edit `blog/posts.json` and add your new post:

```json
{
    "title": "Your Post Title",
    "slug": "my-new-post",
    "date": "2024-03-15",
    "excerpt": "A brief description of your post that appears on the blog page.",
    "tags": ["tag1", "tag2", "tag3"]
}
```

The posts will automatically appear on your blog page, sorted by date (newest first).

## Project Structure

```
.
├── index.html              # Main homepage
├── styles.css             # All styling
├── script.js              # JavaScript for blog loading and navigation
├── blog/
│   ├── posts.json         # Blog post index
│   ├── deep-learning-fundamentals.html
│   ├── computer-vision-paper.html
│   ├── ml-reproducibility.html
│   └── blog-post-template.html
├── README.md              # This file
└── LICENSE
```

## Customization Tips

### Colors

The color scheme is defined in `styles.css` using CSS variables (lines 2-10):

```css
:root {
    --primary-color: #2c3e50;      /* Dark blue-gray */
    --secondary-color: #3498db;    /* Bright blue */
    --accent-color: #e74c3c;       /* Red */
    /* ... */
}
```

Change these values to customize your site's colors.

### Fonts

The site uses system fonts for fast loading. To use custom fonts:

1. Add a font import in the `<head>` of `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

2. Update the font-family in `styles.css`:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Layout

The blog posts are displayed in a responsive grid. Adjust the grid settings in `styles.css` (line 228):

```css
.blog-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}
```

## Adding More Sections

To add a new section to your homepage:

1. Add a navigation link in the navbar (around line 17 in `index.html`)
2. Create a new section with a unique ID:

```html
<section id="your-section" class="section">
    <div class="container">
        <h2>Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

3. Use `class="section-alt"` to alternate background colors

## Support for Academic Features

### BibTeX Citations

Add BibTeX buttons to your publications that copy the citation:

```html
<a href="#" class="btn-small" onclick="copyBibtex(); return false;">BibTeX</a>
```

### Google Analytics (Optional)

To track visitors, add Google Analytics before the closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR-GA-ID');
</script>
```

## Troubleshooting

### Blog posts not showing up

1. Check that `blog/posts.json` is valid JSON (use a JSON validator)
2. Ensure the `slug` in `posts.json` matches your HTML filename (without `.html`)
3. Check the browser console for JavaScript errors

### GitHub Pages not updating

1. Ensure you've pushed your changes to the correct branch
2. Check the Actions tab for build status
3. Wait a few minutes - GitHub Pages can take time to update
4. Clear your browser cache

### Styling issues

1. Make sure all file paths are correct (relative paths matter!)
2. Check that `styles.css` is loading (view page source)
3. Use browser developer tools to inspect elements

## License

This template is released under the MIT License. Feel free to use it for your personal website!

## Credits

Built with:
- HTML5, CSS3, JavaScript
- [Font Awesome](https://fontawesome.com/) for icons
- Hosted on [GitHub Pages](https://pages.github.com/)

---

**Need help?** Open an issue in this repository or check the [GitHub Pages documentation](https://docs.github.com/en/pages).

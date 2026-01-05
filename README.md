# Sebastian Medina - Personal Website

Personal portfolio and research blog hosted on GitHub Pages.

**Live site:** https://srmedinac.github.io/

## Adding Blog Posts

### Step 1: Create the HTML file

Copy `blog/blog-post-template.html` and save it with a descriptive name in the `blog/` directory:

```bash
cp blog/blog-post-template.html blog/my-new-post.html
```

Then edit the file:
- Update the `<title>` tag
- Change the `<h1>` and date in the header
- Add your content using the provided HTML examples
- Update tags in the meta section

### Step 2: Add to the blog index

Edit `blog/posts.json` and add your post to the array:

```json
{
    "title": "Your Post Title",
    "slug": "my-new-post",
    "date": "2025-01-15",
    "excerpt": "Brief description that appears on the blog page",
    "tags": ["tag1", "tag2", "tag3"]
}
```

**Important:** The `slug` must match your HTML filename (without `.html`)

The blog automatically sorts posts by date (newest first).

### Adding Images to Blog Posts

1. Create an images folder: `mkdir -p blog/images`
2. Add your image files to `blog/images/`
3. In your blog post HTML, replace the placeholder divs with:

```html
<img src="images/your-image.png" alt="Description" style="max-width: 100%; height: auto; border-radius: 8px; margin: 2rem 0;">
```

## Updating Publications

Edit `index.html` around lines 73-112. Each publication follows this structure:

```html
<div class="publication-item">
    <h3>Paper Title</h3>
    <p class="authors"><strong>Medina, S</strong>, Co-Author, et al.</p>
    <p class="venue">Journal/Conference Name, Year</p>
    <p class="description">Brief description of the paper.</p>
    <div class="publication-links">
        <a href="https://doi.org/..." class="btn-small">DOI</a>
        <a href="..." class="btn-small">Code</a>
    </div>
</div>
```

## Customizing Appearance

### Colors

Edit `styles.css` lines 2-10 to change the color scheme:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
}
```

### Social Links

Update links in `index.html` lines 30-33:
- Google Scholar
- GitHub
- LinkedIn
- Email

## Project Structure

```
.
├── index.html              # Main homepage
├── styles.css             # All styling
├── script.js              # Blog loading logic
├── blog/
│   ├── posts.json         # Blog index
│   ├── blog-post-template.html
│   └── apic-docetaxel-prediction.html
└── README.md
```

## Troubleshooting

**Blog posts not appearing?**
- Check `posts.json` is valid JSON
- Ensure slug matches HTML filename
- Check browser console for errors

**GitHub Pages not updating?**
- Wait a few minutes (GitHub Pages has delays)
- Check Settings → Pages for build status
- Clear browser cache

---

Built with HTML, CSS, JavaScript • Hosted on GitHub Pages

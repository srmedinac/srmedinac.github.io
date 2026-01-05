// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Load blog posts dynamically
async function loadBlogPosts() {
    try {
        const response = await fetch('blog/posts.json');
        const posts = await response.json();

        const blogContainer = document.getElementById('blog-posts');

        if (posts.length === 0) {
            blogContainer.innerHTML = '<p style="text-align: center; color: var(--text-light);">No blog posts yet. Check back soon!</p>';
            return;
        }

        // Sort posts by date (newest first)
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        blogContainer.innerHTML = posts.map(post => `
            <div class="blog-card" onclick="window.location.href='blog/${post.slug}.html'">
                <div class="blog-card-image"></div>
                <div class="blog-card-content">
                    <div class="blog-card-date">${formatDate(post.date)}</div>
                    <h3>${post.title}</h3>
                    <p class="blog-card-excerpt">${post.excerpt}</p>
                    <div class="blog-card-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading blog posts:', error);
        document.getElementById('blog-posts').innerHTML =
            '<p style="text-align: center; color: var(--text-light);">No blog posts yet. Check back soon!</p>';
    }
}

// Format date to readable string
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Initialize blog posts on page load
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
});

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

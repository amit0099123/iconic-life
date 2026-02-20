const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");
const axios = require("axios");

const hostname = "https://iconiclife.in/";

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });

  // 🔥 Read routesConfig.js as text
  const routesFile = fs.readFileSync("./src/routesConfig.js", "utf8");

  // Regex to extract: { path: "something", sitemap: true }
  const routeRegex = /path:\s*["']([^"']+)["'].*?sitemap:\s*true/g;

  let match;
  while ((match = routeRegex.exec(routesFile)) !== null) {
    const path = match[1];

    // Ignore dynamic routes
    if (!path.includes(":")) {
      sitemap.write({
        url: "/" + path.replace(/^\/+/, ""),
        priority: 0.8
      });
    }
  }

  // Handle index route manually (home page)
  sitemap.write({
    url: "/",
    priority: 1.0
  });

  // 🔥 Dynamic Products
const slugify = (str) =>
  str
    ?.toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");



// Get Categories
const categoryRes = await axios.get(
  "https://iconiclife.in/admin.iconiclife.com/api/get_category"
);

for (const cat of categoryRes.data) {
  const categorySlug = slugify(cat.name);

  const productRes = await axios.get(
    `https://iconiclife.in/admin.iconiclife.com/api/get_product?category=${encodeURIComponent(
      cat.name
    )}`
  );

  productRes.data.forEach((product) => {
    const productSlug = slugify(product.name);

    sitemap.write({
      url: `/products-single/${categorySlug}/${productSlug}`,
      priority: 0.8,
    });
  });
}

// 🔥 Dynamic Blogs
const blogRes = await axios.get(
  "https://iconiclife.in/admin.iconiclife.com/api/get_blog"
);

blogRes.data.forEach((blog) => {
  if (blog.slug) {
    sitemap.write({
      url: `/${blog.slug}/`,
      priority: 0.7,
      lastmod: blog.updated_at || blog.created_at,
    });
  }
});

  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);
  fs.writeFileSync("./public/sitemap.xml", sitemapOutput);
}

generateSitemap();
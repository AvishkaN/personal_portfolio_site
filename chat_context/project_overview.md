# Project Overview: Personal Portfolio Website

This project is a **Personal Portfolio Website** designed for **Avishka Nirmitha**, an AI Engineer specializing in AI, Deep Learning, Software Systems, and Robotics.

## 🎯 What is this site?

The site serves as a professional, highly stylized online resume and portfolio. It is designed to showcase:

1. **Brand & Identity:** It has a futuristic, "cyber/tech" aesthetic (using glowing text, scanlines, and terminal-like text snippets such as `TARGET_DETECTED` and `ACTIVE_CORE_01`) that perfectly fits an AI and Robotics engineer.
2. **Skills:** Highlights key proficiencies like Python, PyTorch, Computer Vision, ROS2, TensorFlow, and Software Systems.
3. **Experience Timeline:** The timeline component features an interactive, year-by-year journey detailing the transition from early programming in 2017 to a current focus on Physical AI, Robotics, and production-grade Machine Learning.
4. **Projects & Awards:** Displays actual real-world projects (e.g., self-driving pipelines, robotic arm automation) labeled with custom statuses (like "In Production" or "On Going"). It includes a dynamic **Project Detail Page** to showcase in-depth goals, outcomes, image galleries, and embedded LinkedIn posts. Additionally, a dedicated **Awards Page** features an interactive "View Moment" image gallery modal to highlight specific recognitions and events.
5. **Navigation & Contact:** Includes routes for Home, Awards, Projects, and Contact (managed by React Router with a global scroll-to-top handler). The contact page provides a streamlined, secure-terminal-themed grid of direct communication links (LinkedIn, GitHub) rather than a traditional form.

## 💻 Tech Stack

This is a modern frontend web application built using a robust tech stack:

* **Core Framework:** React 18 with TypeScript, bundled and served using Vite.
* **SSG (Static Site Generation):** `vite-react-ssg` pre-renders every route to a real `.html` file at build time. This makes the site fully readable by search engines, LLMs (ChatGPT, Claude, Gemini), and crawlers without needing JavaScript execution. Build command: `npm run build` → `vite-react-ssg build`.
* **Styling:** Tailwind CSS for utility-first styling, combined with custom CSS classes (like `hero-gradient`, `name-glow`) for the advanced visual effects.
* **UI Components:** Uses **shadcn/ui** (built on top of Radix UI primitives) for accessible and customizable components.
* **Routing:** `react-router-dom` for handling multi-page navigation. Routes are defined in `src/routes.tsx` (the SSG-compatible entry point). `src/App.tsx` is kept but unused — `src/main.tsx` now exports `createRoot` via `ViteReactSSG`.
* **Icons:** `lucide-react` and Google Material Symbols.

The site is a **statically pre-rendered application** (not a plain SPA) — every page has its own `.html` file in `dist/`, while still behaving as a React SPA after hydration in the browser.

## 📂 Codebase Structure

The project follows a standard and organized React application structure inside the `src/` directory:

*   **`components/`**: Reusable UI components (e.g., Header, Timeline, Buttons, and shadcn/ui primitives).
*   **`pages/`**: Main route components representing different pages of the website (e.g., HomePage, ProjectDetailPage).
*   **`data/`**: Static data files or configuration constants. `projects.ts` holds all project data.
*   **`hooks/`**: Custom React hooks for shared logic.
*   **`lib/`**: Utility functions and helper libraries (common in shadcn setups for class merging like `utils.ts`).
*   **`routes.tsx`**: SSG-compatible route definitions. Contains all page routes AND the providers wrapper (`QueryClientProvider`, `TooltipProvider`, etc.). This replaced the routing logic that was previously in `App.tsx`.
*   **`main.tsx`**: SSG entry point. Exports `createRoot = ViteReactSSG({ routes })` — this is what `vite-react-ssg` uses to pre-render each page at build time.
*   **`App.tsx`**: Legacy entry (kept but currently unused after SSG migration).
*   **`index.css` & `App.css`**: Global stylesheets containing Tailwind imports and custom CSS classes (e.g., `hero-gradient`, `name-glow`).

## 🔍 SEO / GEO / AI Discoverability

The site is optimised for search engines, AI assistants (ChatGPT, Gemini, Claude), and LLM crawlers via:

* **`public/llms.txt`** — Plain-text file at `avnirmitha.com/llms.txt` containing the full site content (about, skills, timeline, all projects, awards, contact). The emerging standard for AI/LLM discoverability (analogous to `robots.txt` for humans).
* **`public/sitemap.xml`** — Lists all pages with priorities for search engine crawlers.
* **`public/robots.txt`** — Updated to include `Sitemap:` directive pointing to `sitemap.xml`. Never needs changing per-page.
* **`index.html` meta tags** — Full Open Graph, Twitter Card, canonical link, keywords, and `robots: index, follow` tags.
* **JSON-LD Structured Data** — Three schemas embedded in `index.html`:
  * `Person` — name, jobTitle, knowsAbout, sameAs (LinkedIn, GitHub)
  * `WebSite` — site name, URL, description
  * `ItemList` — all 5 projects with URLs and descriptions

### ⚠️ Maintenance: What to update when adding content

**Adding a new page/route:**
1. `public/sitemap.xml` — add a new `<url>` block for the route
2. `public/llms.txt` — add the page content under a new section

**Adding a new project** (most common change):
1. `src/data/projects.ts` — add the project object
2. `vite.config.ts` — add the new slug to the `projectSlugs` array (critical — without this the detail page has no pre-rendered `.html` and crawlers/LLMs cannot read it)
3. `public/sitemap.xml` — add `/projects/<new-slug>` URL entry
4. `public/llms.txt` — add the full project details under the Projects section

**Adding a new award:**
1. `src/pages/AwardsPage.tsx` — add to the `awards` array
2. `public/llms.txt` — add the award under the Awards section

`robots.txt` — never needs per-content changes.

## 🚀 Build & Deployment

**Build:**
```bash
npm run build   # runs vite-react-ssg build, outputs to dist/
```

**Output:** `dist/` contains one `.html` file per route:
- `dist/index.html` → `/`
- `dist/projects.html` → `/projects`
- `dist/awards.html` → `/awards`
- `dist/contact.html` → `/contact`
- `dist/projects/<slug>.html` → each project detail page

**Hosting:** VPS with Nginx. Config at `/etc/nginx/sites-enabled/avnirmitha.com`.
Root: `/var/www/av/3_avnirmitha/dist`. SSL via Certbot/Let's Encrypt.

**Critical Nginx `try_files` directive** (needed for SSG routing):
```nginx
location / {
    try_files $uri $uri.html $uri/ /index.html;
}
```
The `$uri.html` segment is what makes `/projects` serve `projects.html` instead of falling through to `index.html`.

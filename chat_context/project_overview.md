# Project Overview: Personal Portfolio Website

This project is a **Personal Portfolio Website** designed for **Avishka Nirmitha**, an AI Engineer specializing in Deep Learning, Robotics, Python-driven automation, and Edge Computing.

## 🎯 What is this site?

The site serves as a professional, highly stylized online resume and portfolio. It is designed to showcase:

1. **Brand & Identity:** It has a futuristic, "cyber/tech" aesthetic (using glowing text, scanlines, and terminal-like text snippets such as `TARGET_DETECTED` and `ACTIVE_CORE_01`) that perfectly fits an AI and Robotics engineer.
2. **Skills:** Highlights key proficiencies like Python, PyTorch, OpenCV, ROS2, and TensorFlow.
3. **Experience Timeline:** The timeline component features an interactive, year-by-year journey detailing the transition from early programming in 2017 to a current focus on Physical AI, Robotics, and production-grade Machine Learning.
4. **Projects & Awards:** Displays actual real-world projects (e.g., self-driving pipelines, robotic arm automation) labeled with custom statuses (like "In Production" or "On Going"). It includes a dynamic **Project Detail Page** to showcase in-depth goals, outcomes, image galleries, and embedded LinkedIn posts. Additionally, a dedicated **Awards Page** features an interactive "View Moment" image gallery modal to highlight specific recognitions and events.
5. **Navigation & Contact:** Includes routes for Home, Projects, Awards, and Contact. The contact page provides a streamlined, secure-terminal-themed grid of direct communication links (LinkedIn, GitHub, Phone, Emails) rather than a traditional form.

## 💻 Tech Stack

This is a modern frontend web application built using a robust tech stack:

* **Core Framework:** React 18 with TypeScript, bundled and served using Vite.
* **Styling:** Tailwind CSS for utility-first styling, combined with custom CSS classes (like `hero-gradient`, `name-glow`) for the advanced visual effects.
* **UI Components:** Uses **shadcn/ui** (built on top of Radix UI primitives) for accessible and customizable components.
* **Routing:** `react-router-dom` for handling multi-page navigation without reloading.
* **Icons:** `lucide-react` and Google Material Symbols.

Overall, it's a sleek, modern, single-page application (SPA) tailored to leave a strong impression of expertise in cutting-edge AI and robotics technologies.

## 📂 Codebase Structure

The project follows a standard and organized React application structure inside the `src/` directory:

*   **`components/`**: Reusable UI components (e.g., Header, Timeline, Buttons, and shadcn/ui primitives).
*   **`pages/`**: Main route components representing different pages of the website (e.g., HomePage, ProjectDetailPage).
*   **`data/`**: Static data files or configuration constants.
*   **`hooks/`**: Custom React hooks for shared logic.
*   **`lib/`**: Utility functions and helper libraries (common in shadcn setups for class merging like `utils.ts`).
*   **`App.tsx` & `main.tsx`**: Entry points of the React application setting up routing and global context.
*   **`index.css` & `App.css`**: Global stylesheets containing Tailwind imports and custom CSS classes (e.g., `hero-gradient`, `name-glow`).

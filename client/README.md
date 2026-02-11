# LMS - Frontend (Client)

This is the React frontend for the Learning Management System. It's built with Vite and Tailwind CSS, featuring a responsive and modern user interface for both students and educators.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Rich Text Editor**: [Quill](https://quilljs.com/)
- **Video Player**: [React YouTube](https://www.npmjs.com/package/react-youtube)
- **Utilities**: `humanize-duration`, `rc-progress`, `uniqid`

## 📁 Key Directories

- `src/components`: Reusable UI components (Student & Educator specific folders).
- `src/pages`: Main application views (Dashboard, Course Details, etc.).
- `src/context`: Application-wide state management.
- `src/assets`: Static assets like images and icons.

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Configuration**:
   Create a `.env` file in the `client` root:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
   VITE_BACKEND_URL=http://localhost:5000
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## 🎨 Design System

The project uses Tailwind CSS for styling. Custom configurations can be found in `tailwind.config.js`.

---
Developed by [Bhavish](https://github.com/Bhavish511)

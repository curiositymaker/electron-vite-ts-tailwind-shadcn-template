# Electron + Vite + React + Tailwind v4 + shadcn/ui Template

This repository serves as a template for quickly starting a new desktop application project using a modern tech stack:

- **Electron:** Framework for building cross-platform desktop apps with web technologies.
- **Vite:** Next-generation frontend tooling for extremely fast development server startup and optimized builds.
- **React:** A popular JavaScript library for building user interfaces.
- **TypeScript:** Superset of JavaScript adding static types for better developer experience and code maintainability.
- **Tailwind CSS v4:** A utility-first CSS framework for rapid UI development (configured with v4 features).
- **shadcn/ui:** Beautifully designed components that you can copy and paste into your apps. (Pre-configured, components added via CLI).
- **Path Aliases:** Pre-configured for cleaner imports (`@/*`, `@shared/*`).

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** LTS version (v20 or later recommended, as required by some dependencies like Tailwind v4 tools). Download from [nodejs.org](https://nodejs.org/).
- **Package Manager:** npm (comes with Node.js), yarn, or pnpm. Commands below will use `npm`.

## Getting Started

1.  **Create a New Repository from Template:**

    - Navigate to the main page of this template repository on GitHub.
    - Click the "**Use this template**" button.
    - Select "**Create a new repository**".
    - Choose an owner, repository name, and other settings.
    - Click "**Create repository**".

2.  **Clone Your New Repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    cd YOUR_REPOSITORY_NAME
    ```

## Installation

Install the project dependencies using your preferred package manager:

```bash
npm install
# or
# yarn install
# or
# pnpm install
```

## Development

To start the development server and run the Electron application:

```bash
npm run dev
```

This command will:

1.  Start the Vite development server with Hot Module Replacement (HMR) for the renderer process.
2.  Compile the main and preload scripts.
3.  Launch the Electron application, loading the UI from the Vite dev server.

Changes made to renderer code (React components, CSS) will often update live without a full restart. Changes to main process or preload scripts will usually require restarting the `dev` command.

## Building for Production

To build the application for distribution:

```bash
# Build for macOS (Intel + Apple Silicon Universal)
npm run build:mac

# Build for Windows
npm run build:win

# Build for Linux
npm run build:linux

# Build for all platforms defined in package.json
npm run build
```

The build process will:

1.  Use Vite to build and bundle the renderer, main, and preload scripts for production.
2.  Use `electron-builder` to package the application into distributable formats (e.g., `.dmg`, `.zip` for macOS; `.exe` for Windows; `.AppImage`, `.deb` for Linux).
3.  Output the packaged application(s) into the `dist` directory.

## Key Features & Configuration

This template comes pre-configured with several key features:

### Tailwind CSS (v4)

- **Configuration:** `tailwind.config.js` in the project root.
- **Main CSS:** Global styles and Tailwind imports are handled in `src/renderer/src/assets/main.css`.
- **v4 Setup:** Uses the `@import "tailwindcss";` directive and CSS variables defined in `main.css`.
- **Theme Variables:** Leverages the `@theme inline { ... }` directive in `main.css` to map CSS variables (from shadcn/ui setup) to Tailwind theme tokens (e.g., `--color-foreground` maps to `text-foreground`, `bg-foreground`, etc.).
- **Animation:** Configured with `tw-animate-css`.

### shadcn/ui

- **CLI Tool:** Components are **not** installed as dependencies. You add them using the shadcn CLI.
- **Configuration:** `components.json` in the project root defines paths and theme settings for the CLI.
- **Adding Components:** Use the following command to add new components:
  ```bash
  npx shadcn@latest add <component_name>
  # Example: npx shadcn@latest add button sheet dialog
  ```
  This will add the component source code to `src/renderer/src/components/ui/`.
- **Styling:** Components are styled using Tailwind CSS and the pre-defined CSS variables in `src/renderer/src/assets/main.css`.

### Path Aliases

Aliases are configured for cleaner imports:

- **`@/*`**: Resolves to `src/renderer/src/*` (Use in renderer code).
- **`@shared/*`**: Resolves to `src/shared/*` (Use for code shared between main/preload/renderer). _Note: You might need to create the `src/shared` directory._
- **`@main/*`**: Resolves to `src/main/*` (Use within main process code).
- **`@preload/*`**: Resolves to `src/preload/*` (Use within preload script code).

**Configuration Files:**

- **Renderer:** `tsconfig.web.json` (for TS) and `electron.vite.config.ts` (for Vite bundling).
- **Main/Preload/Shared:** `tsconfig.node.json` (for TS).

**Example Usage:**

```typescript
// In a renderer component:
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import logo from '@/assets/logo.png'

// In main process (src/main/index.ts):
import { setupSomething } from '@shared/utils/setup'
import { createDbConnection } from '@main/db'
```

### Directory Structure

- `build/`: Contains resources for building (like icons).
- `dist/`: Output directory for packaged applications.
- `dist-electron/`: Intermediate build output used by `electron-builder`.
- `src/`: Source code.
  - `main/`: Electron main process code. Entry point: `index.ts`.
  - `preload/`: Electron preload script(s). Entry point: `index.ts`.
  - `renderer/`: React application code (UI).
    - `src/`: Main source for the React app.
      - `assets/`: CSS, images, fonts. **`main.css` is the key entry point here.**
      - `components/`: React components (including `ui/` for shadcn components).
      - `lib/`: Utility functions (like `cn` from shadcn).
      - `App.tsx`: Root React component.
      - `main.tsx`: React application entry point.
    - `index.html`: HTML entry point for the renderer.
  - `shared/` (Optional): Create this for code shared between processes. Remember to update `tsconfig.node.json` includes/paths if you use it.

## Customization

- **UI:** Modify React components in `src/renderer/src/`. Start with `App.tsx`. Add new shadcn components using the CLI.
- **Styling:** Adjust Tailwind classes directly in components. Modify base styles, CSS variables, or Tailwind theme mappings in `src/renderer/src/assets/main.css`. Edit `tailwind.config.js` for broader theme changes (requires dev server restart).
- **Main Process Logic:** Add features (file system access, native menus, IPC handling) in `src/main/index.ts` or break logic into other files within `src/main/`.
- **Preload Script:** Modify `src/preload/index.ts` to securely expose specific Node.js/Electron APIs to the renderer process via the `contextBridge`.
- **Application Icons:** Replace the default icons in the `build/` directory with your own (`icon.ico`, `icon.icns`, `icon.png`). Ensure `electron-builder` config in `package.json` or `electron-builder.yml` points to them.
- **App ID/Name:** Update `appId` and `productName` in the `electron-builder` configuration.

---

Happy Coding!
